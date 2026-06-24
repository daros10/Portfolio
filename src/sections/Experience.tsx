import { Box, Container, Typography, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../components/SectionTitle'
import { GlassCard } from '../components/GlassCard'
import { experiences } from '../data/portfolio'
import WorkIcon from '@mui/icons-material/Work'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

export const Experience = () => {
  const { t } = useTranslation()

  return (
    <Box id="experience" sx={{ py: { xs: 10, md: 15 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <SectionTitle title={t('experience.title')} subtitle={t('experience.subtitle')} />

        {/* Timeline */}
        <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto' }}>
          {/* Vertical line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: '50%' },
              transform: { md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, #4fd1c5, rgba(99,102,241,0.1))',
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={exp.company}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-start' : 'flex-end' },
                pl: { xs: 6, md: 0 },
                mb: 5,
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 12, md: '50%' },
                  transform: { md: 'translateX(-50%)' },
                  top: 24,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4fd1c5, #a0aec0)',
                  border: '3px solid #0f0f1a',
                  zIndex: 1,
                }}
              />

              <Box sx={{ width: { xs: '100%', md: '45%' } }}>
                <GlassCard delay={index * 0.1}>
                  <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 1 }}>
                    <WorkIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
                      {exp.company}
                    </Typography>
                    <Box
                      component="a"
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: 'flex', color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    >
                      <OpenInNewIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </Stack>

                  <Typography variant="body2" color="primary.light" sx={{ fontWeight: 500, mb: 0.5, textAlign: 'center' }}>
                    {exp.role}
                  </Typography>

                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
                    {exp.startDate} — {exp.endDate}
                  </Typography>

                  {/* All tasks fully displayed */}
                  <List dense sx={{ mt: 1.5 }}>
                    {exp.taskKeys.map((key) => (
                      <ListItem key={key} sx={{ px: 0, py: 0.3, alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                          <ArrowRightIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={t(`${exp.tasksKey}.${key}`)}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                            sx: { fontSize: '0.82rem', lineHeight: 1.5 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </GlassCard>
              </Box>
            </Box>
          ))}


        </Box>
      </Container>
    </Box>
  )
}
