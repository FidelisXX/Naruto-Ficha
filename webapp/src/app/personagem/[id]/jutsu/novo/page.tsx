"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function NewJutsuPage() {
  const params = useParams<{ id: string }>();

  return (
    <main className="flex-1 mx-auto w-full max-w-2xl px-4 py-10">
      <Link href={`/personagem/${params.id}`} className="text-sm text-muted-foreground hover:underline">
        ← Voltar para a ficha
      </Link>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-muted-foreground">Criador de Jutsu</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Esta é a Fase 5 do roadmap: o assistente de criação de jutsu customizado (tipo →
            pré-requisitos/componentes → efeitos por slots → custo final), seguindo as regras do
            Manual Shinobi (Cap. 9). Ainda não implementado — chegaremos aqui depois das Fases 1 a 4.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
