import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "./src/firebaseConnection";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import UsuariosList from "./src/components/UsuariosList";

interface Usuario {
  id: string;
  nome: string;
  email: string;
  cargo: string;
}

export default function App() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cargo, setCargo] = useState<string>("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isEditing, setIsEditing] = useState("");

  useEffect(() => {
    function getDados() {
      // const docret = doc(db, "usuarios", "1");
      const usersRef = collection(db, "usuarios");
      onSnapshot(usersRef, (snapshot) => {
        let lista: Usuario[] = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
            cargo: doc.data().cargo,
          });
        });
        setUsuarios(lista);
      });

      // onSnapshot(doc(db, "usuarios", "1"), (doc) => {
      //   setNome(doc.data()?.nome);
      //   setEmail(doc.data()?.email);
      //   setCargo(doc.data()?.cargo);
      // });
    }

    getDados();
  }, []);

  async function handleRegister() {
    await addDoc(collection(db, "usuarios"), {
      nome,
      email,
      cargo,
    })
      .then(() => {
        console.log("Cadastrado com sucesso");
        setNome("");
        setEmail("");
        setCargo("");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function editUser(dados: Usuario) {
    setNome(dados.nome);
    setEmail(dados.email);
    setCargo(dados.cargo);
    setIsEditing(dados.id);
  }

  async function handleEditUser() {
    const docRef = doc(db, "usuarios", isEditing);
    await updateDoc(docRef, {
      nome,
      email,
      cargo,
    });
    setNome("");
    setEmail("");
    setCargo("");
    setIsEditing("");
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(texto) => setNome(texto)}
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(texto) => setEmail(texto)}
      />

      <Text style={styles.label}>Cargo:</Text>
      <TextInput
        style={styles.input}
        value={cargo}
        onChangeText={(texto) => setCargo(texto)}
      />

      {isEditing === "" ? (
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleEditUser}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
      )}
      <FlatList
        style={styles.list}
        data={usuarios}
        renderItem={({ item }) => (
          <UsuariosList dados={item} handleEdit={(item) => editUser(item)} />
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  button: {
    backgroundColor: "#000",
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    padding: 8,
    color: "#FFF",
    textAlign: "center",
  },
  label: {
    color: "#000",
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 8,
  },
  labelUsuarios: {
    marginTop: 14,
    marginLeft: 8,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
});
