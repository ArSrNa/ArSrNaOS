import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <nav className="h-16 border-b bg-background/80 fixed top-0 left-0 right-0 z-10 backdrop-blur-md backdrop-saturate-150">
      <div className="h-full flex items-center justify-start max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block left-10" />

        <div className="flex items-center gap-3 ml-auto">
          {/* <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button>Get Started</Button> */}

          <ThemeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
