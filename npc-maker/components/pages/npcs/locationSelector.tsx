import { ToggleGroupItem } from "@/components/ui/toggle-group";

export default function LocationSelector(props: { locationNode: { location_name: string }, setSelectedLocation }) {
  return (
    <ToggleGroupItem className="w-auto h-auto" variant={"outline"} onClick={() => props.setSelectedLocation(props.locationNode)} value={props.locationNode.id}>
      <div className="shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex px-12" >
        <div className="bg-black/5 rounded-[50px] justify-center items-center inline-flex">
          <div className="self-stretch text-center text-black text-[62.50px] font-normal leading-[100px]"  >🌎</div>
        </div>
        <div className="self-stretch h-7 flex-col justify-start items-start gap-2 flex"  >
          <div className="self-stretch text-center text-black text-xl font-normal leading-7 whitespace-nowrap" >
            {props.locationNode.location_name}
          </div>
        </div>
      </div>
    </ToggleGroupItem>
  );
}