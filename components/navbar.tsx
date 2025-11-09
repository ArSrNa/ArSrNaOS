import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";

const Navbar = () => {
  return (
    <nav className="h-16 border-b fixed top-0 left-0 right-0 z-10" style={{
      background: '#ffffffcc',
      backdropFilter: 'blur(15px) saturate(1.8)'
    }}>
      <div className="h-full flex items-center justify-start max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block left-10" />

        <div className="flex items-center gap-3 ml-auto">
          {/* <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button>Get Started</Button> */}

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
