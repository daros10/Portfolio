import { Box, Container, Typography, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../components/SectionTitle'
import { GlassCard } from '../components/GlassCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { valueKey: '5+', labelKey: 'about.yearsExp' },
  { valueKey: '15+', labelKey: 'about.projectsCompleted' },
  { valueKey: '40+', labelKey: 'about.technologies' },
]

export const About = () => {
  const { t } = useTranslation()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <Box id="about" sx={{ py: { xs: 10, md: 15 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                {t('about.description')}
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
              {stats.map((stat, index) => (
                <GlassCard key={stat.labelKey} delay={index * 0.15} sx={{ flex: '1 1 0', minWidth: 100 }}>
                  <Box sx={{ textAlign: 'center', py: 0.5 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#4fd1c5',
                        fontWeight: 700,
                        fontSize: '2rem',
                      }}
                    >
                      {stat.valueKey}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: '0.7rem', mt: 0.3, display: 'block' }}
                    >
                      {t(stat.labelKey)}
                    </Typography>
                  </Box>
                </GlassCard>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
