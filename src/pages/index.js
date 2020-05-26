import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import jsonpAdapter from 'axios-jsonp';
import { navigate } from 'gatsby';

import {FaSearch, FaSpinner } from 'react-icons/fa';

import api from '../services/api';
import formatCnpj from '../utils/formatCnpj';

import Container from '../components/Container';
import Form from '../components/Form';
import { SubmitButton } from '../components/SubmitButton';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const [cnpj, setCnpj] = useState('');
  const [newCnpj, setNewCnpj] = useState('');
  const [finded, setFinded] = useState(true);
  const [loading, setLoading] = useState(false)

  function handleInputChange(e) {
    setNewCnpj(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setFinded(false);

    try {
      if(newCnpj === '') throw 'Voce precisa digitar um CNPJ';

      const response = await api.get(`https://www.receitaws.com.br/v1/cnpj/${formatCnpj(newCnpj)}`, {
        adapter: jsonpAdapter
      });

      setNewCnpj('');
      setCnpj(response.data);
      setLoading(false);
      setFinded(true);

      navigate('/query/', {
        state: response.data
      })
    } catch(error) {
      setLoading(false);
    }
  }


  return (
    <Layout>
      <SEO title='Inicio' />
      <Container>
        <h1>CNPJ</h1>
        <Form onSubmit={handleSubmit} finded={finded}>
          <InputMask
            mask="99.999.999/9999-99"
            type="text"
            placeholder="Digite aqui um CNPJ"
            value={newCnpj}
            onChange={handleInputChange}
          />
          <SubmitButton loading={loading}>
            { loading ?
              <FaSpinner color="#fff" size={25}/> :
              <FaSearch color="#fff" size={25}/>
            }
          </SubmitButton>
        </Form>
      </Container>
    </Layout>
  )
}

export default IndexPage
