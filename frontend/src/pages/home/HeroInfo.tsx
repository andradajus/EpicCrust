import { HealthiconsUnhealthyFood, IcBaselineDeliveryDining, StreamlineDiscountPercentBadgeSolid, StreamlineShippingTransferTruckTimeTruckShippingDeliveryTimeWaitingDelay } from "@/assets/Icons"

const HeroInfo = () => {
  return (
    <>
    <div className="card">
      <div className="card-body flex flex-row justify-around">
        <div className="card-content">
          <div className="font-bold flex gap-2">
            <IcBaselineDeliveryDining  className="w-7 h-7"/>
            <span>Free Delivery</span>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div className="card-content">
        <div className="font-bold flex gap-2">
            <StreamlineDiscountPercentBadgeSolid  className="w-7 h-7"/>
            <span>Discounts</span>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div className="font-bold flex gap-2">
            <HealthiconsUnhealthyFood  className="w-7 h-7"/>
            <span>Free Side Dish</span>
        </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div className="font-bold flex gap-2">
            <StreamlineShippingTransferTruckTimeTruckShippingDeliveryTimeWaitingDelay  className="w-7 h-7"/>
            <span>Delivery within 30 minutes</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroInfo
