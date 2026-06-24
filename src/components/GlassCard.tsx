import { Paper, PaperProps } from '@mui/material'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface GlassCardProps extends PaperProps {
  hover?: boolean
  delay?: number
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, hover = true, delay = 0, sx, ...props }, ref) => {
    return (
      <Paper
        ref={ref}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
        elevation={0}
        sx={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(12px)',
          borderRadius: 3,
          p: 3,
          transition: 'all 0.3s ease',
          '&:hover': hover
            ? {
                background: 'rgba(255, 255, 255, 0.04)',
                borderColor: 'rgba(79, 209, 197, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255,255,255,0.04)',
              }
            : undefined,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Paper>
    )
  }
)
