import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import server from "../../services/ServerService";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const School = () => {
  const { id } = useParams();
  const [schoolData, setSchoolData] = useState([]);
  const [uniqueNames, setUniqueNames] = useState([]);
  const [dataBefore2009, setDataBefore2009] = useState([]);
  const [dataAfter2009, setDataAfter2009] = useState([]);

  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const response = await server.get(
          `/api/enem-escola?codigoEscola=${id}`
        );
        setSchoolData(response);
        const names = response.map((data) => data.no_ESCOLA_EDUCACENSO);
        const uniqueNames = [...new Set(names)];
        setUniqueNames(uniqueNames);

        const before2009 = response.filter((data) => data.ano < 2009);
        const after2009 = response.filter((data) => data.ano >= 2009);
        setDataBefore2009(before2009);
        setDataAfter2009(after2009);
      } catch (error) {
        console.error("Erro ao buscar escola:", error);
      }
    };

    fetchSchoolData();
  }, [id]);

  return (
    <div className="school-container">
      {schoolData.length > 0 ? (
        <>
          <div className="school-header">
            <h2>{uniqueNames[uniqueNames.length - 1]}</h2>
            {uniqueNames.length > 1 && (
              <p className="tooltip">
                {uniqueNames.slice(0, -1).map((name, index) => (
                  <h3 key={index}>{name}</h3>
                ))}
              </p>
            )}
          </div>
          <div className="school-location">
            <h2>Localização</h2>
            <p>Município: {schoolData[0].nomeMunicipio}</p>
            <p>Estado: {schoolData[0].sg_UF_ESCOLA}</p>
          </div>
          <h3>Dados antes de 2009</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={dataBefore2009}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ano" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_CN"
                name="Média Ciências da Natureza"
                stroke="#8884d8"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_CH"
                name="Média Ciências Humanas"
                stroke="#82ca9d"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_LP"
                name="Média Linguagens e Códigos"
                stroke="#ffc658"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_MT"
                name="Média Matemática"
                stroke="#ff7300"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_RED"
                name="Média Redação"
                stroke="#387908"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_TOT"
                name="Média Total"
                stroke="#ff0000"
              />
            </LineChart>
          </ResponsiveContainer>
          <h3>Dados a partir de 2009</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={dataAfter2009}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ano" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_CN"
                name="Média Ciências da Natureza"
                stroke="#8884d8"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_CH"
                name="Média Ciências Humanas"
                stroke="#82ca9d"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_LP"
                name="Média Linguagens e Códigos"
                stroke="#ffc658"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_MT"
                name="Média Matemática"
                stroke="#ff7300"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_RED"
                name="Média Redação"
                stroke="#387908"
              />
              <Line
                type="monotone"
                dataKey="nu_MEDIA_TOT"
                name="Média Total"
                stroke="#ff0000"
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default School;
