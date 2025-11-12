import { XiaoBoard } from "@tscircuit/common"
import { VoltageRegulator } from "./lib/VoltageRegulator"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"
import { KeyCircuit } from "./lib/KeyCircuit"

export default () => (
  <XiaoBoard
    variant="RP2040"
    name="J1"
    routingDisabled
    schMaxTraceDistance={5}
    width="21mm"
    height="17.5mm"
    connections={{
      SWDIO: "net.SWDIO",
      SWCLK: "net.SWCLK",
      RUN: "net.RUN",
      GND1: "net.GND",
      GND2: "net.GND",
      GND3: "net.GND",
      VIN: "net.V5_5",
      VBUS: "net.USB_VDD",
      V3_3: "net.V3_3",
      A0: "net.GPIO26",
      A1: "net.GPIO27",
      A2: "net.GPIO28",
      A3: "net.GPIO29",
      SDA: "net.GPIO6",
      SCL: "net.GPIO7",
      TX: "net.GPIO0",
      RX: "net.GPIO1",
      MOSI: "net.GPIO3",
      MISO: "net.GPIO4",
      SCK: "net.GPIO2",
    }}
  >
    {/* Power routing */}
    <trace from="net.V5_5" to="net.VSYS" />
    <trace from="net.USB_VDD" to="net.V3_3" />

    {/* Internal circuits */}
    <VoltageRegulator />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <KeyCircuit />
    <RP2040Circuit />
  </XiaoBoard>
)
