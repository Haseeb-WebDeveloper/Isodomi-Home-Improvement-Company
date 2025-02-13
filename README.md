# Isodomi - Professional Insulation Services Website

A modern, responsive website built for Isodomi, a professional insulation company serving central Netherlands. The website showcases their services, expertise, and makes it easy for potential customers to request quotes.

## Features

- 🎨 Modern UI/UX with smooth animations using Framer Motion
- 📱 Fully responsive design
- 🌙 Light/Dark mode support
- 📝 Multi-step contact form with validation
- 📧 Email integration for quote requests
- 🔍 SEO optimized
- ⚡ Built with performance in mind

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Email Service:** Nodemailer with Brevo SMTP
- **Typography:** Geist Font
- **Icons:** Lucide React

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Haseeb-WebDeveloper/construction-client-website.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SENDER_EMAIL=your_sender_email
COMPANY_EMAIL=your_company_email
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the website

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── layout/         # Layout components
│   └── ui/             # UI components
├── lib/                # Utility functions
└── styles/             # Global styles
```

## Key Components

- `HeroSection`: Main landing section
- `ServicesSection`: Services showcase
- `WhyChooseSection`: Benefits and features
- `ContactSection`: Multi-step contact form
- `FAQSection`: Frequently asked questions
- `AboutSection`: Company information
- `Footer`: Site footer with company info

## Deployment

The site is optimized for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For any queries regarding the website, please contact:
- Email: info@renodomi.nl
- Phone: +31850604466


## 🤝 Developer Contact

Haseeb Ahmed - [web.dev.haseeb@gmail.com](mailto:web.dev.haseeb@gmail.com)

Connect with me on:
- [LinkedIn](https://pk.linkedin.com/in/haseeb-ahmed-raza-khan)
- [GitHub](https://github.com/Haseeb-WebDeveloper/)
- [Instagram](https://www.instagram.com/haseeb.ahmed.raza.khan/)
- [Portfolio](https://haseebkhan.online/)

---