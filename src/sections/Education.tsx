import { Box, Container, Typography, Stack, Link, Chip } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { GlassCard } from '../components/GlassCard'
import { courses } from '../data/portfolio'
import SchoolIcon from '@mui/icons-material/School'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import VerifiedIcon from '@mui/icons-material/Verified'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export const Education = () => {
  const { t } = useTranslation()

  return (
    <Box id="education" sx={{ py: { xs: 10, md: 15 }, position: 'relative' }}>
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          background: 'radial-gradient(ellipse at bottom left, rgba(99, 179, 237, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <SectionTitle title={t('education.title')} subtitle={t('education.subtitle')} />

        <Grid container spacing={4}>
          {/* Academic degrees */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3} sx={{ height: '100%' }}>
              {/* Master's degree - current */}
              <GlassCard delay={0.1} hover={false}>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 179, 237, 0.2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AutoAwesomeIcon sx={{ color: 'secondary.light', fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', textAlign: 'center' }}>
                      {t('education.mastersTitle')}
                    </Typography>
                    <Chip
                      label={t('education.inProgress')}
                      size="small"
                      sx={{
                        mt: 0.5,
                        height: 20,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        background: 'rgba(6, 182, 212, 0.15)',
                        color: '#a0aec0',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                      }}
                    />
                  </Box>
                </Stack>

                <Typography variant="body1" sx={{ fontSize: '0.95rem', mb: 0.5, color: 'primary.light', fontWeight: 500, textAlign: 'center' }}>
                  {t('education.mastersDegree')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', textAlign: 'center' }}>
                  {t('education.mastersUniversity')}
                </Typography>
              </GlassCard>

              {/* Undergraduate degree */}
              <GlassCard delay={0.2} hover={false}>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(79, 209, 197, 0.2), rgba(99, 179, 237, 0.2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SchoolIcon sx={{ color: 'primary.light', fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', textAlign: 'center' }}>
                      {t('education.universityTitle')}
                    </Typography>
                    <Chip
                      label={t('education.completed')}
                      size="small"
                      sx={{
                        mt: 0.5,
                        height: 20,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        background: 'rgba(79, 209, 197, 0.15)',
                        color: '#818cf8',
                        border: '1px solid rgba(79, 209, 197, 0.3)',
                      }}
                    />
                  </Box>
                </Stack>

                <Typography variant="body1" sx={{ fontSize: '0.95rem', mb: 0.5, color: 'primary.light', fontWeight: 500, textAlign: 'center' }}>
                  {t('education.degree')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', textAlign: 'center' }}>
                  {t('education.university')}
                </Typography>
              </GlassCard>
            </Stack>
          </Grid>

          {/* Courses */}
          <Grid size={{ xs: 12, md: 7 }}>
            <GlassCard delay={0.3} hover={false} sx={{ height: '100%' }}>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5} sx={{ mb: 3 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(79, 209, 197, 0.2))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MenuBookIcon sx={{ color: 'secondary.light', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>
                    {t('education.coursesTitle')}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {courses.length} {t('education.coursesCompleted')}
                  </Typography>
                </Box>
              </Stack>

              <Box
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
              >
                {courses.map((course) => (
                  <motion.div key={course.name} variants={itemVariants}>
                    <Link
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: 2,
                        border: '1px solid rgba(255,255,255,0.04)',
                        background: 'rgba(255,255,255,0.02)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          background: 'rgba(79, 209, 197, 0.08)',
                          borderColor: 'rgba(79, 209, 197, 0.25)',
                          transform: 'translateX(4px)',
                          '& .course-icon': {
                            color: 'primary.main',
                          },
                          '& .course-link': {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      <VerifiedIcon
                        className="course-icon"
                        sx={{
                          fontSize: 18,
                          color: 'text.secondary',
                          transition: 'color 0.2s ease',
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.primary',
                          fontSize: '0.85rem',
                          lineHeight: 1.4,
                          flex: 1,
                        }}
                      >
                        {course.name}
                      </Typography>
                      <OpenInNewIcon
                        className="course-link"
                        sx={{
                          fontSize: 14,
                          color: 'text.secondary',
                          opacity: 0,
                          transition: 'opacity 0.2s ease',
                          flexShrink: 0,
                        }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
