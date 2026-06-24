import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionTitleProps {
  title: string
  subtitle: string
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      sx={{ textAlign: 'center', mb: 8 }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          mb: 1,
          color: '#e8e8e8',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ fontSize: '1.1rem' }}
      >
        {subtitle}
      </Typography>
      <Box
        sx={{
          width: 50,
          height: 3,
          borderRadius: 2,
          background: 'linear-gradient(90deg, #4fd1c5, #63b3ed)',
          mx: 'auto',
          mt: 2,
          opacity: 0.7,
        }}
      />
    </Box>
  )
}
