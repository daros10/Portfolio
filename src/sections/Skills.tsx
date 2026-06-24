import { Box, Container, Typography, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { GlassCard } from '../components/GlassCard'
import { skillCategories } from '../data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  },
}

const SkillCard = ({ categoryKey, skills, delay, featured = false }: {
  categoryKey: string
  skills: { name: string; icon: string }[]
  delay: number
  featured?: boolean
}) => {
  const { t } = useTranslation()

  return (
    <GlassCard
      delay={delay}
      hover={false}
      sx={{
        height: '100%',
        overflow: 'hidden',
        ...(featured && {
          background: 'rgba(99, 179, 237, 0.04)',
          border: '1px solid rgba(99, 179, 237, 0.15)',
        }),
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 2.5 }}>
        {featured && (
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #63b3ed, #a0aec0)',
              boxShadow: '0 0 8px rgba(99, 179, 237, 0.5)',
            }}
          />
        )}
        <Typography
          variant="h6"
          sx={{
            fontSize: '0.85rem',
            color: featured ? 'secondary.light' : 'primary.light',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            textAlign: 'center',
          }}
        >
          {t(`skills.${categoryKey}`)}
        </Typography>
      </Stack>

      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1.5,
          justifyContent: 'center',
        }}
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants} style={{ flexShrink: 0 }}>
            <Stack
              alignItems="center"
              spacing={0.5}
              sx={{
                width: 80,
                p: 1,
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.04)',
                background: 'rgba(255, 255, 255, 0.02)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                '&:hover': {
                  background: featured
                    ? 'rgba(99, 179, 237, 0.12)'
                    : 'rgba(79, 209, 197, 0.1)',
                  borderColor: featured
                    ? 'rgba(99, 179, 237, 0.4)'
                    : 'rgba(79, 209, 197, 0.35)',
                  transform: 'translateY(-4px)',
                  boxShadow: featured
                    ? '0 8px 24px rgba(99, 179, 237, 0.2)'
                    : '0 8px 24px rgba(79, 209, 197, 0.15)',
                  '& img': {
                    filter: 'drop-shadow(0 0 8px rgba(79, 209, 197, 0.4))',
                    transform: 'scale(1.15)',
                  },
                },
              }}
            >
              <Box
                component="img"
                src={skill.icon}
                alt={skill.name}
                sx={{
                  width: 28,
                  height: 28,
                  objectFit: 'contain',
                  transition: 'all 0.3s ease',
                  filter: 'brightness(0.9)',
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  textAlign: 'center',
                  lineHeight: 1.2,
                  wordBreak: 'break-word',
                  hyphens: 'auto',
                  width: '100%',
                }}
              >
                {skill.name}
              </Typography>
            </Stack>
          </motion.div>
        ))}
      </Box>
    </GlassCard>
  )
}

export const Skills = () => {
  const { t } = useTranslation()

  const aiCategory = skillCategories.find((c) => c.key === 'ai')!
  const otherCategories = skillCategories.filter((c) => c.key !== 'ai')

  return (
    <Box id="skills" sx={{ py: { xs: 10, md: 15 }, position: 'relative' }}>
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <SectionTitle title={t('skills.title')} subtitle={t('skills.subtitle')} />

        {/* AI Skills - Featured full width */}
        <Box sx={{ mb: 3 }}>
          <SkillCard
            categoryKey={aiCategory.key}
            skills={aiCategory.skills}
            delay={0}
            featured
          />
        </Box>

        {/* Other skill categories */}
        <Grid container spacing={3}>
          {otherCategories.map((category, catIndex) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={category.key}>
              <SkillCard
                categoryKey={category.key}
                skills={category.skills}
                delay={(catIndex + 1) * 0.1}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
