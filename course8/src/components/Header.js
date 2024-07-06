import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Circle, Link } from "@chakra-ui/react";

const socials = [
  {
    name: "email",
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    name: "github",
    icon: faGithub,
    url: "https://github.com",
  },
  {
    name: "linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    name: "medium",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    name: "stackoverflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef();
  const buttonRef = useRef();
  
  // handle scrolling
  useEffect(() => {
    const topOffsetThreshold = 200;
    let prevScrollPos = window.pageYOffset;

    // manually set css style for transition
    const setIsScrollingDown = (isScrollingDown) => {
      if (!headerRef.current) return;
      headerRef.current.style.transform = `translateY(${isScrollingDown ? "-200px" : 0})`;
    }
    const setIsScrolledTop = (isScrolledTop) => {
      if (!buttonRef.current) return;
      buttonRef.current.style.visibility = isScrolledTop ? "hidden" : "visible";
      buttonRef.current.style.opacity = isScrolledTop ? 0 : 1;
    }

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingDown(prevScrollPos < currentScrollPos);
      setIsScrolledTop(currentScrollPos <= topOffsetThreshold);
      prevScrollPos = currentScrollPos;
    };

    const handleTouchMove = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingDown(prevScrollPos < currentScrollPos);
      setIsScrolledTop(currentScrollPos <= topOffsetThreshold);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const HeaderBar = () => (
    <Box
      ref={headerRef}
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      backgroundColor="#18181b"
      transition="transform .3s ease-in-out"
    >
      <HStack
        color="white"
        maxWidth="1280px"
        margin="0 auto"
        px={{base:6, md:16}}
        py={{base:2, md:4}}
        justifyContent="space-between"
        alignItems="center"
        fontSize={{base:"sm", sm:"md"}}
      >
        <HStack as="nav" spacing={{base:2, md:6}}>
          { socials.map(({ name, icon, url }) => (
            <Link key={url} title={name} href={url}><FontAwesomeIcon icon={icon} size="2x" /></Link>
          )) }
        </HStack>
        <HStack as="nav" spacing={{base:4, sm:8}}>
          <Link title="projects" cursor="pointer" onClick={handleClick('projects')}>Projects</Link>
          <Link title="contact me" cursor="pointer" onClick={handleClick('contactme')}>Contact Me</Link>
        </HStack>
      </HStack>
    </Box>
  );

  const TopButton = () => (
    <Circle
      ref={buttonRef}
      as="a" display="block"
      position="fixed"
      top="85%" left="90%"
      zIndex={2}
      cursor="pointer"
      color="white"
      backgroundColor="#222222"
      border="2px solid #444444"
      w={10} h={10}
      lineHeight={9}
      textAlign="center"
      fontSize={20}
      onClick={handleClick('landing')}
      transition="all .3s"
      visibility="hidden"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </Circle>
  )

  return (
    <React.Fragment>
      <HeaderBar />
      <TopButton />
    </React.Fragment>
  );
};
export default Header;
