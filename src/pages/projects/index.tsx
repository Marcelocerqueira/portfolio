import React, { useState } from "react";
import { Content, Cards, CardContent, ButtonGroup, Card } from "./styles";
import PageDefault from "../../components/PageDefault";
import ButtonLink from "../../components/LinkButton";

import { useEffect } from "react";
import api from "../../services/api";

interface IUser {
    avatar_url: string;
    login: string;
    name: string;
    bio: string;
    location: string;
    company: string;
    twitter_username: string;
}

interface IRepository {
    id: number;
    name: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
    description: string;
    owner: IUser; //Tipando um objeto
    login: string;
}

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);

    console.log(repositories);

    useEffect(() => {
        async function getRepo() {
            const login = "Marcelocerqueira";
            const reposResponse = await api.get<IRepository[]>(
                `/users/${login}/starred`
            );
            console.log("reposResponse", reposResponse);
            function isBigEnough(value: any) {
                return value?.owner?.login === login;
            }

            const filtered = reposResponse.data.filter(isBigEnough);

            setRepositories(filtered);
        }
        getRepo();
    }, []);

    return (
        <PageDefault>
            <Content>
                {repositories.length < 1 && (
                    <div className="content-loading">
                        <img
                            src="http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif"
                            alt="loading"
                        />
                    </div>
                )}

                <Cards>
                    {repositories.map((data) => (
                        <Card key={data.name}>
                            <CardContent>
                                <h3>{data.name}</h3>
                                <p>
                                    {data.description ? (
                                        data.description
                                    ) : (
                                        <div>Without description</div>
                                    )}
                                </p>

                                <ButtonGroup>
                                    <ButtonLink href={data.html_url}>
                                        Source code
                                    </ButtonLink>
                                </ButtonGroup>
                            </CardContent>
                            
                        </Card>
                    ))}
                </Cards>
            </Content>
        </PageDefault>
    );
};
export default Projects;
