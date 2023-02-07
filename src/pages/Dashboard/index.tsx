import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do GitHub</Title>

      <Form>
        <input placeholder="username/repository_name" type="text" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/69471715?v=4"
            alt="Repositorio"
          />
          <div>
            <strong>Sans-arch/git-collection</strong>
            <p>Projeto de uma aplicação ReactJS com TypeScript</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
