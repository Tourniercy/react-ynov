import {useState,useEffect, useMemo} from 'react';
import {getArticles} from "../../services";
import { Container, Row, Col} from "react-bootstrap";
import ArticleCard from "../../components/ArticleCard";


const MainPage = () => {
    // const [page, setPage] = useState(1);
    // const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(true)
    // const [nat, setNat] = useState('')
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        setLoading(true)
        getArticles().then(
            (res) => {
                console.log(res);
                setArticles(Object.values(res))
                console.log(articles);
            }
        ).then(
            () => setTimeout(() => setLoading(false) ,500)
        )
    }, []);

    return (
        <div className="App">
            <Container>
                <Row>
                    {
                        !loading && articles.map(a => {
                            return (
                                <div key={a.id} className="col-4 p-5">
                                    <ArticleCard article={a}/>
                                </div>
                            )
                        })
                    }
                    {
                        loading && Array(10).fill(0).map((e,i) => {
                            return (
                                <div key={i} className="col-4 p-5">
                                    <ArticleCard loading/>
                                </div>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MainPage;