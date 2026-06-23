import { Box } from '@mui/material'
import { useEffect, useRef } from 'react'

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    interface Star {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      twinkleSpeed: number
      twinkleOffset: number
    }

    interface ShootingStar {
      x: number
      y: number
      length: number
      speed: number
      opacity: number
      angle: number
      life: number
      maxLife: number
    }

    let stars: Star[] = []
    let shootingStars: ShootingStar[] = []
    let time = 0

    const createStars = () => {
      stars = []
      const count = Math.floor((canvas.width * canvas.height) / 4000)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.02 + 0.005,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    const spawnShootingStar = () => {
      if (Math.random() > 0.005) return
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        length: 60 + Math.random() * 80,
        speed: 8 + Math.random() * 6,
        opacity: 0.7 + Math.random() * 0.3,
        angle: (Math.PI / 6) + Math.random() * (Math.PI / 6),
        life: 0,
        maxLife: 40 + Math.random() * 30,
      })
    }

    const draw = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars with twinkling
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.4 + 0.6
        const alpha = star.opacity * twinkle

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220, 230, 240, ${alpha})`
        ctx.fill()

        // Slight glow on bigger stars
        if (star.size > 1.2) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(79, 209, 197, ${alpha * 0.1})`
          ctx.fill()
        }
      })

      // Shooting stars
      spawnShootingStar()
      shootingStars = shootingStars.filter((s) => {
        s.life++
        if (s.life > s.maxLife) return false

        const progress = s.life / s.maxLife
        const fadeIn = Math.min(progress * 4, 1)
        const fadeOut = 1 - Math.pow(progress, 2)
        const alpha = s.opacity * fadeIn * fadeOut

        const headX = s.x + Math.cos(s.angle) * s.speed * s.life
        const headY = s.y + Math.sin(s.angle) * s.speed * s.life
        const tailX = headX - Math.cos(s.angle) * s.length * fadeOut
        const tailY = headY - Math.sin(s.angle) * s.length * fadeOut

        const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY)
        gradient.addColorStop(0, `rgba(79, 209, 197, 0)`)
        gradient.addColorStop(1, `rgba(220, 235, 245, ${alpha})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(headX, headY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.stroke()

        return true
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    createStars()
    draw()

    const handleResize = () => {
      resize()
      createStars()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box sx={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Deep space background gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, #0f1923 0%, #0c0c0c 60%)',
        }}
      />

      {/* Nebula orbs */}
      <Box
        sx={{
          position: 'absolute',
          width: '50vw',
          height: '50vw',
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 209, 197, 0.07) 0%, transparent 65%)',
          top: '-15%',
          right: '-8%',
          filter: 'blur(60px)',
          animation: 'nebula1 22s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '40vw',
          height: '40vw',
          maxWidth: 550,
          maxHeight: 550,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 179, 237, 0.06) 0%, transparent 65%)',
          bottom: '5%',
          left: '-5%',
          filter: 'blur(60px)',
          animation: 'nebula2 28s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '35vw',
          height: '35vw',
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(160, 174, 192, 0.05) 0%, transparent 60%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(70px)',
          animation: 'nebula3 18s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '25vw',
          height: '25vw',
          maxWidth: 350,
          maxHeight: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 209, 197, 0.05) 0%, transparent 60%)',
          top: '60%',
          right: '10%',
          filter: 'blur(50px)',
          animation: 'nebula4 24s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '30vw',
          height: '30vw',
          maxWidth: 400,
          maxHeight: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 179, 237, 0.04) 0%, transparent 60%)',
          top: '10%',
          left: '20%',
          filter: 'blur(55px)',
          animation: 'nebula5 20s ease-in-out infinite',
        }}
      />

      {/* Stars canvas */}
      <Box
        component="canvas"
        ref={canvasRef}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />

      <style>{`
        @keyframes nebula1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          33% { transform: translate(-40px, 50px) scale(1.1); opacity: 1; }
          66% { transform: translate(30px, -30px) scale(0.9); opacity: 0.7; }
        }
        @keyframes nebula2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          33% { transform: translate(50px, -40px) scale(1.15); opacity: 1; }
          66% { transform: translate(-30px, 30px) scale(0.85); opacity: 0.6; }
        }
        @keyframes nebula3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) translate(40px, 40px) scale(1.2); opacity: 0.9; }
        }
        @keyframes nebula4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          40% { transform: translate(-35px, -25px) scale(1.1); opacity: 0.8; }
          70% { transform: translate(25px, 35px) scale(0.9); opacity: 0.6; }
        }
        @keyframes nebula5 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(30px, -40px) scale(1.15); opacity: 0.8; }
        }
      `}</style>
    </Box>
  )
}
