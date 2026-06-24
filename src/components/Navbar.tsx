import { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import TranslateIcon from '@mui/icons-material/Translate'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import profileImg from '../assets/daro.png'

const navItems = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact']

export const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setDrawerOpen(false)
  }

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      component={motion.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      sx={{
        background: scrolled
          ? 'rgba(10, 10, 15, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, mx: 'auto', width: '100%', px: { xs: 2, md: 4 } }}>
        <Box
          onClick={() => scrollToSection('home')}
          sx={{
            cursor: 'pointer',
            width: 36,
            height: 36,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(79, 209, 197, 0.5)',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#4fd1c5',
              transform: 'scale(1.05)',
            },
          }}
        >
          <Box
            component="img"
            src={profileImg}
            alt="Dario Herrera"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        {!isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item)}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    background: 'rgba(79, 209, 197, 0.08)',
                  },
                }}
              >
                {t(`nav.${item}`)}
              </Button>
            ))}
            <IconButton
              onClick={toggleLanguage}
              size="small"
              sx={{
                ml: 1,
                color: 'text.secondary',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
              }}
            >
              <TranslateIcon fontSize="small" />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={toggleLanguage} size="small" sx={{ color: 'text.secondary' }}>
              <TranslateIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: 'rgba(10, 10, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            width: 260,
            borderLeft: '1px solid rgba(255,255,255,0.06)',
          },
        }}
      >
        <List sx={{ pt: 8 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item)} sx={{ px: 4, py: 1.5 }}>
                <ListItemText
                  primary={t(`nav.${item}`)}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: 'text.secondary',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  )
}
