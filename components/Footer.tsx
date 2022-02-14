import { useRouter } from 'next/router';
import styled from 'styled-components';

const Footer = (): JSX.Element => {
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  return (
    <Container>
      <ChangButton
        type="button"
        onClick={() => router.push(isMainPage ? '/todo/add' : '/')}>
        {isMainPage ? '+' : '-'}
      </ChangButton>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  line-height: 0;
  width: 100%;
  height: 53px;
  border-top: 1px solid ${props => props.theme.colors.gray};
  background-color: #fff;
`;

const ChangButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 32px;
  &:hover {
    background-color: #f1f2f3;
  }
`;

export default Footer;
