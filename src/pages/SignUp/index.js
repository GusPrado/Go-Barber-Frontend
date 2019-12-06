import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome completo"
                    name="name"
                    id=""
                />
                <Input
                    type="email"
                    placeholder="Seu e-mail"
                    name="email"
                    id=""
                />
                <Input
                    type="password"
                    placeholder="Sua senha secreta"
                    name="password"
                    id=""
                />

                <button type="submit">Criar conta</button>
                <Link to="/">Já possuo Login</Link>
            </Form>
        </>
    );
}
