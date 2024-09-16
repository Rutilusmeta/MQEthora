import { useParams } from "react-router-dom"

import { useStoreState } from "../../store"
import { MyProfile } from "./MyProfile"
import { OtherProfile } from "./OtherProfile"

export default function Profile() {
  const user = useStoreState((state) => state.user)
  const parameters: { wallet: string } = useParams()

  return user.walletAddress === parameters.wallet ? (
    <MyProfile />
  ) : (
    <OtherProfile walletAddress={parameters.wallet} />
  )
}
