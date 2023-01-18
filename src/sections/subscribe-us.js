/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Flex, Checkbox, Label } from 'theme-ui';
import { useState } from 'react';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Input from 'components/input';
import illustration from 'assets/images/subscribe-bg.png';

const SubscribeUs = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Want to Book Your Marriage? Call Us"
            description="Aryasamaj Chengicherla has performed more than 5000 marriages since 2013"
          />
          <Box  sx={styles.subscribe}>
            <a style={{textDecoration: "none",flexGrow:"0.5"}} href="tel:+919701891862">
              <Button variant="primary">Call Us</Button>
              </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: `url(${illustration}) no-repeat center bottom / cover`,
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [30, 40, null, '40px 100px', '50px 80px', '40px'],
    gap: '50px',
    display: ['block', 'block', 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', 'center', 'left', 'center', 'left'],
    mb: ['30px', '30px', '30px', '30px', 0],
    ml: 0,
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '36px'],
      letterSpacing: [0, 0, 0, '-1px'],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', 'auto', 'auto', 'auto', 0],
      mr: ['auto', 'auto', 'auto', 'auto', 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    display:["flex"],
    justifyContent: ["flex-end"],
    button: {
      width: ['100%'],
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
    },
  },
  formGroup: {
    flexDirection: ['column', null, null, 'row'],
    width: ['50%'],
    display:["flex"],
    justifyContent: ["flex-end"],
    alignItems: ['flex-end']
  },
  checkbox: {
    mt: ['24px'],
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba('#9095AD', 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: '#EFF3F7',
        },
      },
      '&.checked': {
        svg: {
          path: {
            fill: 'primary',
          },
        },
      },
    },
  },
};
