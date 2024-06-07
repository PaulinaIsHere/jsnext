import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center ">
      <h1
        className="text-4xl 
        text-rose-950"
      >
        Paulina Nowakowska
      </h1>
      <p className="text-lg font-bold, font-style: italic">Nr albumu: 104 566</p>
      <div className="p-5">
      <Button className="bg-green-800 hover:bg-green-600">
        <Link href="/nowa">Otwórz nową stronę</Link></Button>
      </div>
      <div className="p-5">
      <Button className="bg-green-600 hover:bg-green-400">
        <Link href="/click">Otwórz dla rozrywki</Link></Button>
      </div>
      <div className="p-6">
        <Button className="bg-red-700 hover:bg-red-500">
          <Link href="/clickme">Kliknij mnie</Link></Button>
      </div>
      <div className="p-6">
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" className="bg-yellow-300">
              Otwórz okienko
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
