import { TFunction } from "react-i18next";

export const data = (t: TFunction<"translation">) => {
  return {
    personalInformation: {
      fullName: `${t("fullName")}`,
      grade: "Computer Systems Engineer",
      twitter: "https://twitter.com/darii__O",
      linkedin: "https://www.linkedin.com/in/dario-herrera-1212541a7/",
      github: "https://github.com/daros10",
      about: `${t("about.aboutMeDescription")}`,
    },
    education: [
      {
        name: `${t("education.name")}`,
        grade: `${t("education.gradeTitle")}`,
        speciality: `${t("education.speciality")}`,
        icon: "https://cicam.epn.edu.ec/images/headers/EPN.jpg",
      },
      {
        name: "",
        grade: `${t("education.courseTitle")}`,
        speciality: "",
        icon: "",
        course: [
          {
            name: "Angular: De cero a experto (Angular 10+)",
            url: "https://www.udemy.com/certificate/UC-65c50b1b-1db4-4a19-9098-6c782203f8ea/",
          },
          {
            name: "Android con Kotlin, Firebase y Google",
            url: "https://www.udemy.com/certificate/UC-a85ccaf3-c77e-4bff-ba2a-254a4c4a3dbd/",
          },
          {
            name: "Flutter: Tu guía completa de desarrollo para IOS y Android",
            url: "https://www.udemy.com/certificate/UC-ac949cfe-a5f9-4b89-ade0-f071310ba7dc/",
          },
          {
            name: "Flutter: Diseños nivel profesionales y animaciones",
            url: "https://www.udemy.com/certificate/UC-6fad40f9-115f-43da-88cb-4b46c184b546",
          },
          {
            name: "Node: De cero a experto",
            url: "https://ude.my/UC-e68e4669-cc00-4ab7-b302-2ba3394a5aaf",
          },
          {
            name: "Jetpack Compose: Curso definitivo desde 0",
            url: "https://www.udemy.com/share/1075SS3@k2gFj-0r38YUewVqGR02OmPLBHitrydneqD00rkbkuo-khNB1h1FkK4STXk2NPKc/",
          },
          {
            name: "Flutter Avanzado: Lleva tu conocimiento al siguiente nivel",
            url: "https://www.udemy.com/share/103vX63@QEazNIs39Q7oQR9iiagANl4mkwsfhAairKNa-3ApQLmN666ewMTI4rsOqoIZJMvl/",
          },
          {
            name: "REDUX en Angular con NGRX: Desde las bases hasta la práctica",
            url: "https://www.udemy.com/share/101u1Q3@Np00DcJnswBO_mJRU31d7mNPC7SYlqMTXOc9fzSYvpKqNgISiYgYhh0f1T5Bv9Hc/",
          },
          {
            name: "React: De cero a experto ( Hooks y MERN )",
            url: "https://www.udemy.com/share/103dum3@EdWOuzFH5ckWGME2ZUICOZPlRc7UYwlpjTEC8g0do_jZdxL4hy5elCCmsiDILZa-/",
          },
          {
            name: "Vim, aumenta tu velocidad de desarrollo",
            url: "https://www.udemy.com/share/101O9n3@A3NleLlGLqOukTsCNSR-WFOatAoXxRcC5vEgxqd4uaBwhnvtZw98UvqzOPEwPg2X/",
          },
          {
            name: "Flutter Intermedio: Diseños profesionales y animaciones",
            url: "https://www.udemy.com/share/102LrO3@CTpsx_b0Pr08I_pzJtTaJdkGxkgvkR3UdWtrVUBzs66SZOCwirlUEmk8wjG3dVN0/",
          },
        ],
      },
    ],
    experience: [
      {
        nameFactory: "Casa Pazmiño S.A",
        role: "Junior Software Developer",
        dateStar: "08-feb-2019",
        dateEnd: "30-abr-2019",
        website: "https://casapazmino.com.ec/",
        tasks: [
          `${t("pazminoTask.A")}`,
          `${t("pazminoTask.B")}`,
          `${t("pazminoTask.C")}`,
          `${t("pazminoTask.D")}`,
          `${t("pazminoTask.E")}`,
          `${t("pazminoTask.F")}`,
          `${t("pazminoTask.G")}`,
        ],
      },
      {
        nameFactory: "Ioet Inc",
        role: "Member Of Technical Staff",
        dateStar: " 01-may-2019 ",
        dateEnd: "30-abr-2020",
        website: "https://www.ioet.com/",
        icon: "https://media.licdn.com/dms/image/v2/D4E3DAQFFJYSWZgBT9A/image-scale_191_1128/image-scale_191_1128/0/1719333458855/ioet_cover?e=2147483647&v=beta&t=_EWiLdxVmz3aYFHs0dYF3qprFm5xnE6J0AWq0ErtzmU",
        tasks: [
          `${t("ioetTask.A")}`,
          `${t("ioetTask.B")}`,
          `${t("ioetTask.C")}`,
          `${t("ioetTask.D")}`,
          `${t("ioetTask.E")}`,
          `${t("ioetTask.F")}`,
          `${t("ioetTask.G")}`,
        ],
      },
      {
        nameFactory: "Kushki",
        role: "Senior Software Developer",
        dateStar: " 01-sep-2020 ",
        dateEnd: "14-jul-2023",
        website: "https://kushkipagos.com/",
        icon: "https://soporte.kushkipagos.com/hc/theming_assets/01HZKM75ZWKHJVEKAXDT5N8S56",
        tasks: [
          `${t("kushkiTask.A")}`,
          `${t("kushkiTask.B")}`,
          `${t("kushkiTask.C")}`,
          `${t("kushkiTask.D")}`,
          `${t("kushkiTask.E")}`,
          `${t("kushkiTask.F")}`,
          `${t("kushkiTask.G")}`,
        ],
      },
      {
        nameFactory: "Datafast",
        role: "Senior Software Developer",
        dateStar: " 17-jul-2023 ",
        dateEnd: "PRESENT",
        website: "https://www.datafast.com.ec/",
        icon: "https://media.licdn.com/dms/image/v2/C561BAQGPZh2xTzv5GQ/company-background_10000/company-background_10000/0/1585460796086/datafast_cover?e=2147483647&v=beta&t=Hna8XwmhKbWqoxG5E6y4uGf1DDeIEeESEYEYvd5tTRY",
        tasks: [
          `${t("datafastTask.A")}`,
          `${t("datafastTask.B")}`,
          `${t("datafastTask.C")}`,
          `${t("datafastTask.D")}`,
          `${t("datafastTask.E")}`,
          `${t("datafastTask.F")}`,
          `${t("datafastTask.G")}`,
          `${t("datafastTask.H")}`,
          `${t("datafastTask.I")}`,
        ],
      },
    ],
    professionalProjects: [
      {
        name: "GOSPACE AI",
        description: `${t("goSpace.desc")}`,
        github: "https://www.gospace.com/",
        languagesTools: [
          {
            title: "Flutter",
            icon: "https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png",
          },
          {
            title: "Dart",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dart-logo-icon.svg/2048px-Dart-logo-icon.svg.png",
          },
          {
            title: "Android",
            icon: "https://cdn-icons-png.flaticon.com/512/226/226770.png",
          },
          {
            title: "iOS",
            icon: "https://www.brandemia.org/wp-content/uploads/2011/10/logo_actualidad_apple.jpg",
          },
          {
            title: "Firebase",
            icon: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
          },
          {
            title: "GraphQL",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
          },
          {
            title: "SQLite",
            icon: "https://static-00.iconduck.com/assets.00/application-x-sqlite-icon-1490x2048-eeq74tag.png",
          },
          {
            title: "BLoC",
            icon: "https://1gravity.github.io/Kotlin-Bloc/img/logo.png",
          },
        ],
      },
      {
        name: "TIME TRACKER UI",
        description: `${t("timeTracker.desc")}`,
        github: "https://time-tracker-ui.azurewebsites.net/login",
        languagesTools: [
          {
            title: "Angular",
            icon: "https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-originale-logo.png",
          },
          {
            title: "Bootstrap",
            icon: "https://img.icons8.com/color/512/bootstrap--v2.png",
          },
          {
            title: "HTML",
            icon: "https://w7.pngwing.com/pngs/290/579/png-transparent-html-html-logo-html-5-html-five-logo-html-5-logo-programming-langugae-3d-icon-thumbnail.png",
          },
          {
            title: "CSS",
            icon: "https://img.icons8.com/?size=512&id=21278&format=png",
          },
          {
            title: "Sass",
            icon: "https://sass-lang.com/assets/img/styleguide/seal-color.png",
          },
          {
            title: "NgRX",
            icon: "https://cdn.worldvectorlogo.com/logos/ngrx.svg",
          },
          {
            title: "Mockito",
            icon: "empty",
          },
          {
            title: "Carma",
            icon: "empty",
          },
          {
            title: "Jasmine",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx74EWi1ZKEc1YrvKOzWWkUQ_ANAlXYwnLNQ&s",
          },
          {
            title: "Azure",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
          },
          {
            title: "Docker",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Wrr9RulsgmyA9Whgu9eUJj6uj7FQ-ecrA&s",
          },
          {
            title: "Kubernetes",
            icon: "https://static-00.iconduck.com/assets.00/kubernetes-icon-2048x1995-r1q3f8n7.png",
          },
        ],
      },
      {
        name: `${t("dish.title")}`,
        description: `${t("dish.desc")}`,
        github: "https://github.com/daros10/Web-App-Casa-Pazmino",
        languagesTools: [
          {
            title: "HTML",
            icon: "https://w7.pngwing.com/pngs/290/579/png-transparent-html-html-logo-html-5-html-five-logo-html-5-logo-programming-langugae-3d-icon-thumbnail.png",
          },
          {
            title: "CSS",
            icon: "https://img.icons8.com/?size=512&id=21278&format=png",
          },
          {
            title: "Javascript",
            icon: "https://img.icons8.com/color/512/javascript.png",
          },
          {
            title: "Php",
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
          },
          {
            title: "Bootstrap",
            icon: "https://img.icons8.com/color/512/bootstrap--v2.png",
          },
          {
            title: "PostgresSQL",
            icon: "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
          },
          {
            title: "Ajax",
            icon: "empty",
          },
        ],
      },
    ],
    personalProjects: [
      {
        name: `${t("home.title")}`,
        description: `${t("home.desc")}`,
        github:
          "https://github.com/daros10/Tesis_Security_System_Iot_mobile_app",
        languagesTools: [
          {
            title: "Kotlin",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
          },
          {
            title: "Python",
            icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
          },
          {
            title: "Firebase",
            icon: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
          },
          {
            title: "RaspberryPi",
            icon: "https://static-00.iconduck.com/assets.00/raspberry-pi-icon-2048x2048-p0y4r07x.png",
          },
          {
            title: "GpioZero",
            icon: "https://www.dusuniot.com/wp-content/uploads/2023/01/GPIO-Zero-logo.png",
          },
          {
            title: "Flask",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s",
          },
          {
            title: "Proteus",
            icon: "empty",
          },
          {
            title: "Corntab",
            icon: "empty",
          },
          {
            title: "Android",
            icon: "https://cdn-icons-png.flaticon.com/512/226/226770.png",
          },
        ],
      },
      {
        name: "Pico & Placa Predictor",
        description: `${t("prediction.desc")}`,
        github: "https://github.com/daros10/Pico-and-Placa",
        languagesTools: [
          {
            title: "React",
            icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          },
          {
            title: "MaterialUI",
            icon: "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png",
          },
        ],
      },
      {
        name: "NEWS APP",
        description: `${t("news.desc")}`,
        github: "https://github.com/daros10/Flutter-NewsApp",
        languagesTools: [
          {
            title: "Flutter",
            icon: "https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png",
          },
          {
            title: "Provider",
            icon: "empty",
          },
          {
            title: "News API",
            icon: "empty",
          },
          {
            title: "Andriod",
            icon: "https://cdn-icons-png.flaticon.com/512/226/226770.png",
          },
          {
            title: "iOS",
            icon: "https://www.brandemia.org/wp-content/uploads/2011/10/logo_actualidad_apple.jpg",
          },
        ],
      },
      {
        name: "SPOTY APP",
        description: `${t("spoty.desc")}`,
        github:
          "https://github.com/daros10/Course-Angular/tree/master/spotiapp",
        languagesTools: [
          {
            title: "Angular",
            icon: "https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-originale-logo.png",
          },
          {
            title: "Bootstrap",
            icon: "https://img.icons8.com/color/512/bootstrap--v2.png",
          },
          {
            title: "Spotify API",
            icon: "empty",
          },
        ],
      },
      {
        name: "DOCKERIZED API REST",
        description: `${t("rest.desc")}`,
        github: "https://github.com/daros10/Avalith-Api-Rest",
        languagesTools: [
          {
            title: "Node.js",
            icon: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
          },
          {
            title: "Express",
            icon: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
          },
          {
            title: "Docker",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9Wrr9RulsgmyA9Whgu9eUJj6uj7FQ-ecrA&s",
          },
          {
            title: "Docker Compose",
            icon: "empty",
          },
          {
            title: "Mongo DB",
            icon: "https://img.icons8.com/?size=192&id=74402&format=png",
          },
          {
            title: "MongoDB Atlas",
            icon: "https://store-images.s-microsoft.com/image/apps.7322.0ad9e17c-15dc-49db-9db4-d9f75b621712.e28c2c9b-2051-41bb-b36e-897b0b48f472.ed615d54-19ec-4cf0-98c6-ae0f8a92ec42",
          },
          {
            title: "Heroku",
            icon: "https://static-00.iconduck.com/assets.00/heroku-icon-2048x2048-4rs1dp6p.png",
          },
        ],
      },
      {
        name: "WEATHER APP",
        description: `${t("weather.desc")}`,
        github: "https://github.com/daros10/WeatherAppAndroid",
        languagesTools: [
          {
            title: "Kotlin",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
          },
          {
            title: "Retrofit",
            icon: "empty",
          },
          {
            title: "GSON",
            icon: "empty",
          },
          {
            title: "OpenWeather API",
            icon: "empty",
          },
          {
            title: "Android",
            icon: "https://cdn-icons-png.flaticon.com/512/226/226770.png",
          },
        ],
      },
      {
        name: "REST API WITH AUTHENTICATION AND PATH PROTECTION",
        description: `${t("protect.desc")}`,
        github: "https://github.com/daros10/RestServer-NodeJS",
        languagesTools: [
          {
            title: "Node.js",
            icon: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
          },
          {
            title: "Express",
            icon: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
          },
          {
            title: "Google",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
          },
        ],
      },
    ],
    skills: [
      {
        title: "Flutter",
        alt: "F",
        icon: "https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png",
      },
      {
        title: "Dart",
        alt: "D",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dart-logo-icon.svg/2048px-Dart-logo-icon.svg.png",
      },
      {
        title: "Kotlin",
        alt: "K",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
      },
      {
        title: "Android",
        alt: "A",
        icon: "https://cdn-icons-png.flaticon.com/512/226/226770.png",
      },
      {
        title: "JavaScript",
        alt: "J",
        icon: "https://img.icons8.com/color/512/javascript.png",
      },
      {
        title: "TypeScript",
        alt: "T",
        icon: "https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png",
      },
      {
        title: "Python",
        alt: "P",
        icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
      },
      {
        title: "HTML",
        alt: "H",
        icon: "https://w7.pngwing.com/pngs/290/579/png-transparent-html-html-logo-html-5-html-five-logo-html-5-logo-programming-langugae-3d-icon-thumbnail.png",
      },
      {
        title: "CSS",
        alt: "C",
        icon: "https://img.icons8.com/?size=512&id=21278&format=png",
      },
      {
        title: "Bootstrap",
        alt: "B",
        icon: "https://img.icons8.com/color/512/bootstrap--v2.png",
      },
      {
        title: "Material-UI",
        alt: "M",
        icon: "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png",
      },
      {
        title: "Angular",
        alt: "A",
        icon: "https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-originale-logo.png",
      },
      {
        title: "React",
        alt: "R",
        icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        title: "NgRx",
        alt: "N",
        icon: "https://cdn.worldvectorlogo.com/logos/ngrx.svg",
      },
      {
        title: "Redux",
        alt: "R",
        icon: "https://img.icons8.com/color/512/redux.png",
      },
      {
        title: "RxJS",
        alt: "R",
        icon: "https://w7.pngwing.com/pngs/650/439/png-transparent-rxjs-hd-logo-thumbnail.png",
      },
      {
        title: "Node.js",
        alt: "N",
        icon: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
      },
      {
        title: "Mongo DB",
        alt: "M",
        icon: "https://img.icons8.com/?size=192&id=74402&format=png",
      },
      {
        title: "Express",
        alt: "E",
        icon: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
      },
      {
        title: "Firebase",
        alt: "F",
        icon: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      },
      {
        title: "AWS",
        alt: "A",
        icon: "https://img.icons8.com/color/200/amazon-web-services.png",
      },
      {
        title: "MySQL",
        alt: "M",
        icon: "https://banner2.cleanpng.com/20180727/jhz/kisspng-mysql-database-sperrverfahren-technology-web-design-5b5b1a8ce496f1.1755099215326972289363.jpg",
      },
      {
        title: "PostgreSQL",
        alt: "P",
        icon: "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
      },
      {
        title: "Git",
        alt: "G",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      },
      {
        title: "RaspberryPì",
        alt: "R",
        icon: "https://static-00.iconduck.com/assets.00/raspberry-pi-icon-2048x2048-p0y4r07x.png",
      },
      {
        title: "Arduino",
        alt: "A",
        icon: "https://e7.pngegg.com/pngimages/758/841/png-clipart-arduino-max-electronic-circuit-pure-data-oscilloscope-raspberry-pi-icons-logo-microcontroller-thumbnail.png",
      },
      {
        title: "Jetpack Compose",
        alt: "J",
        icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png",
      },
      {
        title: "Lambda",
        alt: "L",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Amazon_Lambda_architecture_logo.png",
      },
      {
        title: "S3",
        alt: "S",
        icon: "https://w7.pngwing.com/pngs/53/368/png-transparent-amazon-com-amazon-glacier-amazon-s3-amazon-web-services-amazon-elastic-compute-cloud-cloud-computing-angle-text-service-thumbnail.png",
      },
      {
        title: "CodePipeline",
        alt: "C",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepYEOe-6s-VhBO4jmTrUEzGjP3YuB6xC_2Q&s",
      },
      {
        title: "Cognito",
        alt: "C",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4uZbsb2UZRBLntvC14iMM8eikzmMukT9cA&s",
      },
      {
        title: "DynamoDB",
        alt: "D",
        icon: "https://www.remoterocketship.com/_next/image?url=%2Fimages%2Fblog%2FDynamoDB-icon-for-blog.jpg&w=384&q=75",
      },
      {
        title: "API Gateway",
        alt: "A",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhN5YVZyALFvuGCPwag4n2vE0Mnlpc9iihTgvUJRgcwns2NsWSeG2TXTah_aTj6LDspY&usqp=CAU",
      },
      {
        title: "Sockets",
        alt: "S",
        icon: "https://static-00.iconduck.com/assets.00/socket-io-icon-512x511-xjp7kzx6.png",
      },
      {
        title: "CloudWatch",
        alt: "C",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVoBvvf1Nev4QQvEtrCldbGqAUyUIU0Rqxg&s",
      },
      {
        title: "AWS Amplify",
        alt: "A",
        icon: "https://images.seeklogo.com/logo-png/42/1/aws-amplify-logo-png_seeklogo-426696.png",
      },
      {
        title: "IAM",
        alt: "I",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7eEDYLDICzLs8kWpBuqdw2ZbMc_MzUnsCQ&s",
      },
      {
        title: "AWS Glue",
        alt: "A",
        icon: "https://miro.medium.com/v2/resize:fit:700/1*hfibW1kSFq-0KRdZNihOtw.png",
      },
      {
        title: "Secret Manager",
        alt: "S",
        icon: "https://files.svgcdn.io/logos/aws-secrets-manager.png",
      },
      {
        title: "Serverless Framework",
        alt: "S",
        icon: "https://techsquad.rocks/images/serverless.png",
      },
      {
        title: "Terraform",
        alt: "T",
        icon: "https://static-00.iconduck.com/assets.00/terraform-icon-1803x2048-hodrzd3t.png",
      },
      {
        title: "Bitrise",
        alt: "B",
        icon: "https://media.glassdoor.com/sqll/3054950/bitrise-squarelogo-1592727372745.png",
      },
      {
        title: "Play Store",
        alt: "P",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWBCY0mLUJlEWqBCzmoYXcJEoqYBAyUYzgg&s",
      },
      {
        title: "Spring Boot",
        alt: "S",
        icon: "https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png",
      },
    ],
    favoriteLanguagesFrameworks: [
      "Flutter",
      "Dart",
      "Kotlin",
      "React",
      "Bootstrap",
      "MaterialUI",
      "Angular",
      "JavaScript",
      "TypeScript",
      "NodeJS",
      "Express",
      "Python",
      "RaspberryPi",
      "Arduino",
    ],
  };
};
