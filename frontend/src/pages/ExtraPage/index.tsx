import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

const ExtraPage = () => {
  const history = useHistory();

  function redirect() {
    setTimeout(() => {
      history.push('/');
    }, 5000);
  }

  redirect();

  return (
    <div id="page-extra">
      <div className="content">
        <main>
          <h1>Seu local foi adicionado com sucesso!</h1>
          <p>Você será redirecionado em instantes.</p>
        </main>
      </div>
    </div>
  );
};

export default ExtraPage;
