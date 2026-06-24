import { useState, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  TextField,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SendIcon from '@mui/icons-material/Send'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/portfolio'
import { GlassCard } from '../components/GlassCard'

export const Contact = () => {
  const { t } = useTranslation()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSnackbar({ open: true, message: t('contact.errorEmpty'), severity: 'error' })
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSnackbar({ open: true, message: t('contact.errorConfig'), severity: 'error' })
      return
    }

    setLoading(true)

    try {
      await emailjs.send(serviceId, templateId, {
        name: form.name,
        email: form.email,
        message: form.message,
        title: form.name,
      }, publicKey)
      setSnackbar({ open: true, message: t('contact.successMessage'), severity: 'success' })
      setForm({ name: '', email: '', message: '' })
    } catch {
      setSnackbar({ open: true, message: t('contact.errorSend'), severity: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: 2,
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.08)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(79, 209, 197, 0.4)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4fd1c5',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'text.secondary',
    },
    '& .MuiInputBase-input': {
      color: 'text.primary',
    },
  }

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'radial-gradient(ellipse at bottom, rgba(99,102,241,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 1,
              textAlign: 'center',
            }}
          >
            {t('contact.title')}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: '1.1rem', mb: 6, lineHeight: 1.7, textAlign: 'center' }}
          >
            {t('contact.description')}
          </Typography>

          <GlassCard hover={false} sx={{ p: { xs: 3, md: 5 } }}>
            <Box component="form" ref={formRef} onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    name="name"
                    label={t('contact.formName')}
                    value={form.name}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={inputStyles}
                  />
                  <TextField
                    name="email"
                    label={t('contact.formEmail')}
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={inputStyles}
                  />
                </Stack>
                <TextField
                  name="message"
                  label={t('contact.formMessage')}
                  value={form.message}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={5}
                  variant="outlined"
                  sx={inputStyles}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #4fd1c5, #63b3ed)',
                      px: 4,
                      py: 1.2,
                      fontSize: '0.95rem',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #63b3ed, #4299e1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 30px rgba(79, 209, 197, 0.3)',
                      },
                      '&.Mui-disabled': {
                        background: 'rgba(79, 209, 197, 0.3)',
                        color: 'rgba(255,255,255,0.5)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {loading ? t('contact.sending') : t('contact.send')}
                  </Button>
                </Box>
              </Stack>
            </Box>
          </GlassCard>
        </motion.div>

        {/* Footer */}
        <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Dario Herrera.️
          </Typography>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
