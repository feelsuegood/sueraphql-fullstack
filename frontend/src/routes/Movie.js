import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      rating
      isLiked @client
    }
  }
`;
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 20px;
`;

const Image = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const LikeButton = styled.button`
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 25px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-left: 10px;

  &:hover {
    background-color: white;
    color: #d754ab;
  }
`;

const HeartIcon = styled.span`
  font-size: 30px;
  color: white;
  transition: all 0.3s ease-in-out;
  cursor: default;
`;

export default function Movie() {
  // const params = useParams();
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      // movieId: params.id,
      movieId: id,
    },
  });
  // console.log(data, loading);
  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: { isLiked: !data.movie.isLiked },
    });
  };
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : `${data.movie?.title}`}</Title>
        <Subtitle>⭐️ {data?.movie?.rating}</Subtitle>
        <HeartIcon>{data?.movie?.isLiked ? "❤️" : "🤍"}</HeartIcon>
        <LikeButton onClick={onClick}>
          {data?.movie?.isLiked ? "Unlike" : "Like"}
        </LikeButton>
      </Column>
      <Image bg={data?.movie?.medium_cover_image} />
    </Container>
  );
}
