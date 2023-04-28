import React from "react";
import { setCookie } from "nookies";

import { Button, Form, Input, notification } from "antd";

import styles from "./Auth.module.scss";

export const RegistrationForm: React.FC = () => {
  return (
    <>
      <div className={styles.formBlock}>
        <Form name="basic" labelCol={{ span: 8 }}></Form>
      </div>
    </>
  );
};
