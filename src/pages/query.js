import React, { useState, useEffect } from 'react';

import formatValue from '../utils/formatValue'

import Container from '../components/Container';
import Title from '../components/Title';
import Value from '../components/Value';
import Field from '../components/Field';
import Layout from '../components/Layout';

export default function Query(props) {
  const [data, setData] = useState()

  console.log(props)

  useEffect(() => {
    if(props.data) {
      localStorage.setItem('dataQuery', JSON.stringify(props.data))
      setData(props.data)
    } else {
      setData(JSON.parse(localStorage.getItem('dataQuery')))
    }
  }, [props.data])

  return(
    <Layout>
      {data ?
        <>
          <Container>
            <h1>Empresa: {data.fantasia}</h1>
            <hr/>
            <Field>
              <p style={{float:'left'}}>
                CNPJ: <Value>{data.cnpj}</Value>
              </p>
              <p style={{float:'right'}}>
                Data de abertura: <Value>{data.abertura}</Value>
              </p>
            </Field>
            <br/>
            <Field>
              Nome empresarial: <Value>{data.nome}</Value>
            </Field>
            {data.efr ? <><br/> <Field>EFR: <Value>{data.efr}</Value></Field> </>: null}
            <br/>
            <Field>
              <p style={{float:'left'}}>
                Tipo: <Value>{data.tipo}</Value>
              </p>
              <p style={{float:'right'}}>
                Porte: <Value>{data.porte}</Value>
              </p>

            </Field>
            <br/>
            <Field>
              Natureza jurídica: <Value>{data.natureza_juridica}</Value>
            </Field>
          </Container>
          <Container>
            <h1>Atividades</h1>
            <hr/>
            <Field>
              {data.atividade_principal ? data.atividade_principal.map(element =>
                <Field>
                  Atividade Principal: <Value>{element.code}</Value> - <Value>{element.text}</Value>
                </Field>
              ) : null}
            </Field>
            <br/>
            <Field>
              {data.atividades_secundarias ?
                <Field> Atividades Secundárias:
                  {data.atividades_secundarias.map(element =>
                    <>
                      <li>
                        CNAE: <Value>{element.code}</Value> - <Value>{element.text}</Value>
                      </li>
                    </>
                  )}
                </Field>
                : null
                }
            </Field>
          </Container>
          <Container>
            <h1>
              Endereço
            </h1>
            <hr/>
            <Field>
              <p style={{float:'left'}}>
                Logradouro: <Value>{data.logradouro}</Value>
              </p>
              <p style={{float:'right'}}>
                Numero: <Value>{data.numero}</Value>
              </p>
            </Field>
            {data.complemento ?
              <>
                <br/>
                <Field>
                  Complemento: <Value>{data.complemento}</Value>
                </Field>
              </>
              : null
            }
            <br/>
            <Field>
              <p style={{float:'left'}}>
                Bairro: <Value>{data.bairro} </Value>
              </p>
              <p style={{float:'right'}}>
                CEP: <Value>{data.cep} </Value>
                UF: <Value>{data.uf} </Value>
              </p>
            </Field>
            <br></br>
          </Container>
          { data.telefone && data.email ?
            <Container>
              <h1>Contato</h1>
              <hr/>
              <Field>
                {data.telefone ? <>Telefone: <Value>{data.telefone}</Value> <br/></> : null }
              </Field>
              <Field>
                {data.email ? <>Email: <Value>{data.email}</Value> <br/></> : null }
              </Field>
            </Container>
            : null
          }
          <Container>
            <h1>Quadro Societário</h1>
            <hr/>
            {data.qsa.length > 0 ?
              <>
                <Field>
                  <ol>
                    {data.qsa.map(element => {
                      return (
                        <li>
                          <Value>{element.qual}</Value> - <Value>{element.nome}</Value>
                          {element.pais_origem ?
                            <ul className="estrangeiro">
                              <li>
                                Sócio estrangeiro - Local: <Value>{element.pais_origem}</Value>
                              </li>
                              {element.qual_rep_legal ?
                                <li>
                                  Representante Legal: <Value>{element.nome_rep_legal}</Value> - Posição: <Value>{element.qual_rep_legal}</Value>
                                </li> : null
                              }
                            </ul> : null
                          }
                        </li>
                      )
                      })}
                  </ol>
                </Field>
                <br/>
              </>
              : null
            }
            <Field>
              Capital Social: <Value>{formatValue(data.capital_social)}</Value>
            </Field>
          </Container>
          <Container>
            <h1>Situação: <Value>{data.situacao}</Value></h1>
            <hr/>
            <Field>
              Data da situação: <Value>{data.data_situacao}</Value>
            </Field>
            <br/>
            <Field>
              <p style={{float:'left'}}>
                Última atualização: <Value>{data.ultima_atualizacao} </Value>
              </p>
              <p style={{float:'right'}} >
                Status: <Value>{data.status}</Value>
              </p>
            </Field>
            <br/>
          </Container>
        </>
      :
        <Container>
          <Title>Vazio</Title>
        </Container>
      }
    </Layout>
  )
}
