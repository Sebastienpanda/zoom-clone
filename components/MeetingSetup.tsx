"use client";

import { DeviceSettings, VideoPreview, useCall } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function MeetingSetup({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) {
    const [isMicCamToggle, setIsMicCamToggle] = useState(false);

    const call = useCall();

    if (!call) {
        throw new Error("usecall must be used within StreamCall component");
    }

    useEffect(() => {
        if (isMicCamToggle) {
            call?.camera?.disable();
            call?.microphone?.disable();
        } else {
            call?.camera?.enable();
            call?.microphone?.enable();
        }
    }, [isMicCamToggle, call?.camera, call?.microphone]);
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
            <h1 className="text-2xl font-bold">Setup</h1>
            <VideoPreview />
            <div className="flex h-16 items-center justify-center gap-3">
                <label htmlFor="checkbox" className="flex items-center justify-center gap-2 font-medium">
                    <input
                        id="checkbox"
                        name="checkbox"
                        type="checkbox"
                        checked={isMicCamToggle}
                        onChange={(e) => setIsMicCamToggle(e.target.checked)}
                    />
                    Join with mic and camera off
                </label>
                <DeviceSettings />
            </div>
            <Button
                className="rounded-md bg-green-500 px-4 py-2.5"
                onClick={() => {
                    call.join();
                    setIsSetupComplete(true);
                }}
            >
                Join Meeting
            </Button>
        </div>
    );
}
