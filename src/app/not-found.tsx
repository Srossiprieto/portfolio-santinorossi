import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">Página no encontrada</h2>
          <p className="text-muted-foreground">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver atrás
            </Link>
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Ir al inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

