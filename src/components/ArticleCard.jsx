import React from 'react';
import { Card, CardColumns } from "react-bootstrap";

import './ArticleCard.css'

const ArticleCard = ({article, loading = false}) => {
    if(loading){
        return (
            <div className="bg-white shadow py-5">
                <div className="d-flex justify-content-center">
                    <div className="img-container-loading rounded-circle bg-secondary" />
                </div>
                <div className="text-container-loading bg-secondary mt-5 p-1 mx-5">

                </div>
            </div>
        );
    }
    return (

        <Card>
            <Card.Img variant="top" src={article.img} />
            <Card.Body>

                <Card.Title>{article.title} </Card.Title>
                <Card.Text>
                    {article.content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ArticleCard;