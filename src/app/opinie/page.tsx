import SideNav from "@/components/ui/SideNav"
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"


function Opinie() {
  return (
    <div className="bg-slate-200 w-screen min-h-screen">
      <main className="max-w-screen-2xl m-auto pt-16 px-16">
        <SideNav />
        <div  className="flex gap-4 mt-16">
          <Card className="py-2">
            <CardContent className="text-justify">
              Długo myślałam co napisać, ponieważ nasz pierwszy taniec który Marta dla nas stworzyła był wyjątkowy, ponadto zrobił dużą furorę wśród gości! Goście mówili: „tak pięknego tańca jeszcze nie widzieliśmy”,  „trudno będzie go pobić innym tańcem”. Dodatkowo czas z Martą jest cudowny. Dziewczyna pełna energii, chcąca sprostać najcięższym wyzwaniom! Tak jak nasze, gdy mając już cały przygotowany taniec postanowiliśmy zmienić piosenkę!!! Co na to Marta?! Od razu podłapała temat i od razu zaczęła działać!!! I cała choreografia przerosła nasze oczekiwania!!! Marta jest bardzo pozytywną osobą i nie ważne jak byliśmy zmęczeni na zajęcia z Martą szliśmy chętnie, a wychodziliśmy z ogromnym uśmiechem!!! Jeśli ktoś się zastanawia jeszcze nad wyborem osoby, która poprowadzi Wasz pierwszy taniec, to naprawdę polecam Martę, która robi to z pasją!!!
            </CardContent>
            <CardTitle className="text-center">KAROLINA I KRIS</CardTitle>
          </Card>
          <Card className="py-2 px-2">
            <CardContent >
              Marta jest najlepszą instruktorką tańca, a przy jej pomocy pierwszy taniec przestaje być taki straszny! Bardzo się tym tańcem stresowaliśmy, nigdy wcześniej nie tańczyliśmy w parze, ale Marta zdziałała cuda. Dzięki jej ogromnym umiejętnościom, wyobraźni i pozytywnej energii, którą nas zaraziła, stworzyła w kilka lekcji układ, który był &quot;nasz&quot; i świetnie się bawiliśmy tańcząc go na weselu.
              Polecamy z całego serca!
            </CardContent>
            <CardTitle className="text-center">OLIWIA I ARTUR</CardTitle>
          </Card>
          <Card className="py-2">
            <CardContent className="text-justify">
              Dla tych, którzy nie wiedzą, to Marta to człowiek-petarda, która nawet z parkietowych drewien zrobi tancerzy!
              Każde spotkanie to była czysta przyjemność, dużo humorku i dużo ćwiczeń, profesjonalna choreografia, cierpliwe znoszenie mojego marudzenia i tłumaczenie co jesteśmy w stanie zrobić ładnie, a co jest zbyt zaawansowane jak na kilka lekcji - złota kobieta!
              Polecanko wszystkim, którzy chcą się nauczyć tańca bez spiny, za to z uśmiechem na ustach - u nas każda próba to była kupa śmiechu i z takim samym szerokim uśmiechem zatańczyliśmy w dniu ślubu
              10000/10, nie ma lepszej instruktorki - nie ma tu o czym dyskutować!
            </CardContent>
            <CardTitle className="text-center">KLAUDIA I MICHAŁ</CardTitle>
          </Card>
          <p>
          </p>
          <h2></h2>
        </div>
        <div className="w-1/2 mx-auto">
          <button className="h-8 mt-8 px-4 bg-green-400 text-white rounded-xl">
            <a href="https://www.facebook.com/martaklisowskapierwszytaniec/reviews" target="_blank">ZOBACZ WIĘCEJ</a>
          </button>
        </div>
      </main>
    </div>
  )
}

export default Opinie