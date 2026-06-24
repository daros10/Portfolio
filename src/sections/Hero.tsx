import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { TypeAnimation } from 'react-type-animation'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DownloadIcon from '@mui/icons-material/Download'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { personalInfo } from '../data/portfolio'
import profileImg from '../assets/daro.png'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient orbs */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 209, 197, 0.15) 0%, transparent 70%)',
          top: '10%',
          right: '-10%',
          filter: 'blur(60px)',
        }}
      />
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 179, 237, 0.08) 0%, transparent 70%)',
          bottom: '20%',
          left: '-5%',
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={6}
        >
          {/* Text content */}
          <Box sx={{ maxWidth: 650, flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'primary.main',
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: '1rem',
                  mb: 2,
                }}
              >
                {t('hero.greeting')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  lineHeight: 1.1,
                  mb: 2,
                  color: '#e8e8e8',
                }}
              >
                {t('hero.name')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box sx={{ mb: 3, height: 40 }}>
                <TypeAnimation
                  sequence={[
                    'Software Engineer',
                    2000,
                    'Full-Stack Developer',
                    2000,
                    'Web Developer',
                    2000,
                    'Mobile Developer',
                    2000,
                    'Cloud Architect',
                    2000,
                    'AI Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#4fd1c5',
                  }}
                />
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: '1.1rem', maxWidth: 600, mb: 4, lineHeight: 1.7 }}
              >
                {t('hero.description')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    background: 'linear-gradient(135deg, #4fd1c5, #63b3ed)',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #63b3ed, #4299e1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 30px rgba(79, 209, 197, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('hero.cta')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  href={personalInfo.cvUrl}
                  target="_blank"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.2)',
                    color: 'text.primary',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      borderColor: 'primary.main',
                      background: 'rgba(79, 209, 197, 0.08)',
                    },
                  }}
                >
                  {t('hero.download')}
                </Button>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
                <IconButton
                  href={personalInfo.github}
                  target="_blank"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href={personalInfo.linkedin}
                  target="_blank"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </motion.div>
          </Box>

          {/* Profile photo */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            sx={{
              position: 'relative',
              flexShrink: 0,
            }}
          >
            {/* Animated gradient ring - outer */}
            <Box
              component={motion.div}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              sx={{
                position: 'absolute',
                inset: -12,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, rgba(79, 209, 197, 0.4), rgba(99, 179, 237, 0.3), rgba(160, 174, 192, 0.1), rgba(79, 209, 197, 0.4))',
                padding: '2px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}
            />
            {/* Inner glow pulse */}
            <Box
              component={motion.div}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              sx={{
                position: 'absolute',
                inset: -20,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(79, 209, 197, 0.15) 0%, transparent 60%)',
                filter: 'blur(20px)',
              }}
            />
            {/* Secondary orbiting ring */}
            <Box
              component={motion.div}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              sx={{
                position: 'absolute',
                inset: -20,
                borderRadius: '50%',
                border: '1px dashed rgba(99, 179, 237, 0.2)',
              }}
            />
            {/* Orbiting dot */}
            <Box
              component={motion.div}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              sx={{
                position: 'absolute',
                inset: -16,
                borderRadius: '50%',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#4fd1c5',
                  boxShadow: '0 0 12px rgba(79, 209, 197, 0.6)',
                }}
              />
            </Box>
            {/* Photo */}
            <Box
              component="img"
              src={profileImg}
              alt="Dario Herrera"
              sx={{
                width: { xs: 220, sm: 280, md: 320 },
                height: { xs: 220, sm: 280, md: 320 },
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(79, 209, 197, 0.3)',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 0 40px rgba(79, 209, 197, 0.1), inset 0 0 30px rgba(0,0,0,0.3)',
              }}
            />
          </Box>
        </Stack>
      </Container>

      {/* Scroll indicator */}
      <Box
        component={motion.div}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <KeyboardArrowDownIcon sx={{ color: 'text.secondary', fontSize: 32 }} />
      </Box>
    </Box>
  )
}
