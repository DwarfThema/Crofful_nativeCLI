import { ApolloClient, makeVar, InMemoryCache } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedinVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token: any) => {
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["loggedIn", JSON.stringify("yes")],
  ]);
  isLoggedinVar(true);
  tokenVar(token);
};

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
