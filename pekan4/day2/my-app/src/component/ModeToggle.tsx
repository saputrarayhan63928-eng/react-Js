// Contoh komponen untuk mengganti tema
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider" // Anda perlu membuat provider ini

function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  )
}