/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { Link } from 'components/link';
import FooterWidget from 'components/footer-widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <Box as="footer" variant="layout.footer">
      <Container>
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.logo}>
            <Logo />
          </Box>
          <Box sx={styles.terms}>
            <Link path="#!">Terms of use</Link>
            <Text as="span">{"  "}|{" "}</Text>
            <Link path="#!">Privacy</Link>
          </Box>
          <Text as="p" sx={styles.copyright}>
            Copyright by {new Date().getFullYear()} Aryasamaj Chengicherla
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footerTopInner: {
    display: ['flex'],
    justifyContent: ['space-between'],
    alignItems: ['center'],
    flexWrap: ['wrap']

  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', 'block', 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
  },
  about: {
    gridRow: ['3/4', '3/4', '1/1', '3/4', 'unset'],
    gridColumn: ['1/3', '1/3', '1/2', '1/5', 'unset'],
  },
  logo: {
    textAlign: ['center', 'center', 'left', 'center'],
  },
  terms: {
    display: ['flex'],

  },
  copyright: {
    color: rgba('#0F2137', 0.6),
    fontSize: ['14px'],
    mt: [3],
    textAlign: ['center', 'center', 'left', 'center', 'left', 'left'],
  },
};
