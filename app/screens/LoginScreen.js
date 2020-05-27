import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import BaseView from "../components/BaseView";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

// import AppForm from "../components/forms/AppForm";
// import AppFormField from "../components/forms/AppFormField";
// import SubmitButton from "../components/forms/SubmitButton";
// import ErrorMessage from "../components/forms/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  // const [email, setEmail] = useState();
  // const [password, setpassword] = useState();

  return (
    <BaseView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          icon="email"
          placeholder="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
