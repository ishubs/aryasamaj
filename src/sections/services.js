/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import individual from 'assets/images/lovemarriage.jpg';
import team from 'assets/images/icons/team.png';
import org from 'assets/images/icons/org.png';

const data = [
  {
    id: 1,
    icon: individual,
    title: 'Love Marriages',
    description: `The Arya Samaj, a Hindu reformist movement, promotes the principle of individual freedom and choice and performs love marriages, breaking the traditional arranged marriage norms in the Indian society.`,
  },
  {
    id: 2,
    icon: team,
    title: 'Inter Caste Marriages',
    description: `With 2000+ Inter-Caste Marriages performed Arya Samaj not only unite two individuals, but also work towards a more inclusive and equitable society.`,
  },
  {
    id: 3,
    icon: org,
    title: 'Inter Religion Marriages',
    description: `With 325 Inter-Religion Marriages Performed  promotes the principle of social equality and performs inter-religion marriages, breaking the traditional barriers of religion and promoting secularism in the Indian society.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Arya Samaj marriage: Tradition and modernity in harmonious union."
          description="Arya Samaj marriage is a beautiful blend of tradition and modernity, where the couple not only promises to love each other, but also to live a virtuous and fulfilling life together"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
    h2: {
      color: 'heading',
      fontSize: ['28px', '32px', '32px', '32px', '32px', '32px', '40px'],
    },
    P: {
      fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
      maxWidth: [510],
      m: ['5px auto 0'],
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'left', 'left', 'center', 'left'],
      maxWidth: [290, 260, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
