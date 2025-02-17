
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const userEmail = localStorage.getItem("userEmail");

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function salvarPersonagem() {
    try {
        const userEmail = localStorage.getItem("userEmail"); // Recupera o e-mail salvo
        if (!userEmail) {
            console.error("Nenhum usuário logado.");
            return;
        }

        // Cria um documento com o e-mail do usuário como ID único
        const docRef = doc(db, "personagens", userEmail);

        await setDoc(docRef, {
            nome: nome.value,
            raca: raca.value,
            classe: classe.value,
            nivel: nivel.value,
            forca: forca.value,
            destreza: destreza.value,
            inteligencia: inteligencia.value,
            vigor: vigor.value,
            carisma: carisma.value,
            notas: notas.value,
            vida_atual: vidaAtual.value,
 
        }, { merge: true }); // 🔥 O `merge: true` evita sobrescrever todo o documento

        console.log("Personagem salvo com sucesso!");
    } catch (e) {
        console.error("Erro ao salvar personagem:", e);
    }
}


async function carregarPersonagem() {
    try {
        const userEmail = localStorage.getItem("userEmail"); // Recupera o e-mail salvo
        if (!userEmail) {
            console.error("Nenhum usuário logado.");
            return;
        }

        // Referência ao documento do personagem do usuário
        const docRef = doc(db, "personagens", userEmail);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();

            // Preencher os inputs com os dados do Firestore
            document.getElementById("nome").value = data.nome || "";
            document.getElementById("raca").value = data.raca || "";
            document.getElementById("classe").value = data.classe || "";
            document.getElementById("nivel").value = data.nivel || "";
            document.getElementById("forca").value = data.forca || "";
            document.getElementById("destreza").value = data.destreza || "";
            document.getElementById("inteligencia").value = data.inteligencia || "";
            document.getElementById("vigor").value = data.vigor || "";
            document.getElementById("carisma").value = data.carisma || "";
            document.getElementById("notas").value = data.notas || "";
            document.getElementById("vidaAtual").value = data.vida_atual || "";


            atualizaAtributosPontos();
            atualizaHabilidades();
            atualizarPontosDistribuicao();
            console.log("Personagem carregado:", data);
        } else {
            console.log("Nenhum personagem encontrado para este usuário.");
        }
    } catch (e) {
        console.error("Erro ao carregar personagem:", e);
    }
}

async function carregarDados() {
    carregarPersonagem();
    atualizarAtributos();
    atualizaHabilidades();
    // atualizarProf();
}
  
window.salvarPersonagem = salvarPersonagem;
window.carregarPersonagem = carregarPersonagem;
window.carregarDados = carregarDados;
window.userEmail = userEmail;
