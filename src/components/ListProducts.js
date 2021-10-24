import React, { useEffect, useState } from 'react'
import BeerProductsServices from '../services/BeerProducts.services'
import { Row, Col, Table } from 'react-bootstrap';
const ListProducts = () => {
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            getData();
        }
        fetchData();
        return () => {
            // clean up
        };
        // eslint-disable-next-line
    }, []);

    const formatPersistence = (persistence) => {
        let data = ''
        let isNegative = false
        if (parseFloat(persistence) < 0) {
            isNegative = true;
        }
        persistence = persistence * 100;
        data = <span className={isNegative ? 'negative-number' : 'positive-number'}>{Math.abs(persistence)}%</span>
        return data;
    }

    const responseDummy = [
        {
            "id": 1,
            "sku": "039430430493093",
            "name": "Ceveza XX Ambar 325 ml",
            "persistence": 0.35,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/977624985-1598910884769.png",
            "averagePosition": 1
        },
        {
            "id": 2,
            "sku": "039430430493093",
            "name": "Ceveza Tecate 325 ml",
            "persistence": -0.25,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/976887917-1580843144986.png",
            "averagePosition": 1
        },
        {
            "id": 3,
            "sku": "039430430493093",
            "name": "Ceveza Lager 325 ml",
            "persistence": 0.35,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/976887953-1580843145187.png",
            "averagePosition": 1
        },
        {
            "id": 4,
            "sku": "039430430493093",
            "name": "Ceveza Bohemia Clara 325 ml",
            "persistence": -0.25,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/976888005-1580843145260.png",
            "averagePosition": 1
        },
        {
            "id": 5,
            "sku": "039430430493093",
            "name": "Ceveza XX Ambar 325 ml",
            "persistence": 0.35,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/977090722-1595955632973.jpeg",
            "averagePosition": 1
        },
        {
            "id": 6,
            "sku": "039430430493093",
            "name": "Ceveza Tecate 325 ml",
            "persistence": -0.25,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/976362175-1580843144503.png",
            "averagePosition": 1
        },
        {
            "id": 7,
            "sku": "039430430493093",
            "name": "Ceveza Indio 325 ml",
            "persistence": 0.35,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/976887942-1580843145119.png",
            "averagePosition": 1
        },
        {
            "id": 8,
            "sku": "039430430493093",
            "name": "Ceveza XX Ambar 325 ml",
            "persistence": -0.25,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/977057103-1595948040994.jpeg",
            "averagePosition": 1
        },
        {
            "id": 9,
            "sku": "039430430493093",
            "name": "Ceveza Indio 325 ml",
            "persistence": 0.35,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/976888005-1580843145260.png",
            "averagePosition": 1
        },
        {
            "id": 10,
            "sku": "039430430493093",
            "name": "Ceveza XX Ambar 325 ml",
            "persistence": -0.25,
            "averagePrice": 55,
            "productImage": "https://storage.googleapis.com/pruebas-tecnicas-images/976888050-1580843149652.png",
            "averagePosition": 1
        }
    ]

    const getData = async () => {
        setListProducts(responseDummy);
        await BeerProductsServices.get()
            .then(response => {
                console.log(response);
                //Helpers.groupPriceEvolution(response_dummy);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <Row>
                <Col lg={12} xs={12} md={12}>
                    <h3 className='title-sections'>Comparative Analysis</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={12} xs={12} md={12}>
                    <Table hover responsive="md" className='list-products'>
                        <thead className='text-center'>
                            <tr>
                                <th>Nombre</th>
                                <th>SKU</th>
                                <th>% Presencia</th>
                                <th>Av. Price</th>
                                <th>Av. Position</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {listProducts.map(function (item, key) {
                                return <tr key={key}>
                                    <td className='text-left'>
                                        <img className='img-product' src={item.productImage} alt={item.name} />{' '}
                                        <span>
                                            {item.name}
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            {item.sku}
                                        </span>
                                    </td>
                                    <td>
                                        {formatPersistence(item.persistence)}
                                    </td>
                                    <td>
                                        {item.averagePrice}
                                    </td>
                                    <td>
                                        {item.averagePosition}
                                    </td>
                                </tr>
                            })

                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>

    )
}

export default ListProducts;