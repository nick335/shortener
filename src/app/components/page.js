"use client"

import Button from "@/components/common/Button/Button";
import DisplayComponent from "@/components/common/DisplayComponent";
import FormInput from "@/components/common/FormInput/FormInput";

export default function ComponentsPage() {
  const colors = {
    "bg-dart": "#2699E3",
    "bg-swift": "#FAB12D",
    "bg-ruby": "#F2443F",
    "bg-secondary-blue": "#272E4B",
    "bg-not-yellow": "#F4E1CE",
    "bg-secondary-red": "#802507",
    "bg-third-blue": "#6259CD",
    "bg-ls-green": "#00B29A",
    "bg-third-red": "#FC8A7A",
    "bg-ecx-black": "#000000",
    "bg-ecx-grey": "#424242",
    "bg-ecx-white": "#FFFFFF",
  }

  return (
    <div>
      <DisplayComponent name="Colors" className="grid grid-cols-4 mx-auto w-fit gap-x-2 gap-y-6">
        {
          Object.entries(colors).map((color, index) => (
            <div key={index} className="col-span-1 flex flex-col items-center">
              <h2 className="text-sm font-semibold">{color[0].substring(3)}</h2>
              <h2 className="text-xs font-light">{color[1]}</h2>
              <div className={`w-10 aspect-square rounded-full border border-neutral-400 ${color[0]}`} />
            </div>
          ))
        }
      </DisplayComponent>

      <DisplayComponent name="Button">
        <Button>Dart (default)</Button>
        <Button variant="ruby">Ruby</Button>
        <Button icon="link">Link</Button>
        <Button icon="people">People</Button>
        <Button variant="danger">Danger</Button>
      </DisplayComponent>

      
      <DisplayComponent name="Form Input">
        <FormInput variant="text" placeholder="Text" />
        <FormInput variant="email" placeholder="Email" />
        <FormInput variant="password" placeholder="Password" />
        <FormInput variant="number" placeholder="Number" />
      </DisplayComponent>
    </div>
  )
}

