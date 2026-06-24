import { useState } from 'react'
import { Box, Container, Typography, Chip, Button, Stack, Tabs, Tab } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { GlassCard } from '../components/GlassCard'
import { professionalProjects, personalProjects } from '../data/portfolio'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export const Projects = () => {
  const { t } = useTranslation()
  const [tab, setTab] = useState(0)

  const projects = tab === 0 ? professionalProjects : personalProjects

  return (
    <Box id="projects" sx={{ py: { xs: 10, md: 15 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            sx={{
              '& .MuiTab-root': {
                color: 'text.secondary',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                '&.Mui-selected': { color: 'primary.main' },
              },
              '& .MuiTabs-indicator': {
                background: 'linear-gradient(135deg, #4fd1c5, #a0aec0)',
                height: 3,
                borderRadius: 2,
              },
            }}
          >
            <Tab label={t('projects.professional')} />
            <Tab label={t('projects.personal')} />
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.name}>
                  <GlassCard delay={index * 0.08} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Project accent bar */}
                    <Box
                      sx={{
                        width: '100%',
                        height: 3,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #4fd1c5, #a0aec0)',
                        mb: 2,
                      }}
                    />

                    <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 1, textAlign: 'center' }}>
                      {project.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.6, flex: 1 }}
                    >
                      {t(project.descriptionKey)}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ mb: 2 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            fontSize: '0.7rem',
                            height: 22,
                            background: 'rgba(79, 209, 197, 0.1)',
                            border: '1px solid rgba(79, 209, 197, 0.2)',
                            color: 'primary.light',
                          }}
                        />
                      ))}
                    </Stack>

                    <Button
                      href={project.url}
                      target="_blank"
                      size="small"
                      endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                      sx={{
                        alignSelf: 'flex-start',
                        color: 'text.secondary',
                        fontSize: '0.8rem',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {t('projects.viewProject')}
                    </Button>
                  </GlassCard>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  )
}
