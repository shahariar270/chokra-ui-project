import React from 'react'
import { useEffect } from 'react'
import './styles.css'
import { Button, Card, Loader, Text } from '@chakra-ui/react';
import { blogData, minifyText } from '../../Utils/Helper';
import { Link } from 'react-router';
import { Loading } from '../Loadding';


export const DynamicRoute = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    blogData().then((res) => {
      setData(res);
      setLoading(false);
    }).catch((err) => {
      console.error("Error fetching blog data:", err);
    });
  }, []);

  return (
    <div className="dynamic-route">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        data.map((item) => (
          <div key={item.id} className="card">
            <Card.Root>
              <Card.Header>
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{minifyText(item.body, 80)}</Card.Description>
              </Card.Header>
              <Link to={item.title}>
                <Button
                  color='white'
                  background='black'
                  width='120px'
                  marginTop='10px'
                  alignSelf='start'
                  _hover={{ background: 'gray.700' }}
                >
                  Learn more
                </Button>
              </Link>
            </Card.Root>
          </div>
        ))
      )}
    </div>
  )
}
