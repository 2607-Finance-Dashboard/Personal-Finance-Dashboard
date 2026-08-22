import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

function ProfileSection() {
    const [isEditing, setIsEditing] = useState(false);

    const [profile, setProfile] = useState({
        name: "Nimo Ali",
        email: "nimo@gmail.com",
        phone: "+254 790785634",
        location: "Nairobi, Kenya",
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <Card className="border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <CardHeader>
                <CardTitle className="text-xl font-bold  ml-30  text-stone-900">
                    Profile Overview
                </CardTitle>

                <CardDescription className="text-gray-500  ml-30 mb-8">
                    Manage your personal information and account details.
                </CardDescription>
            </CardHeader>

            {/* Content */}
            <CardContent>
                <div className="flex flex-col gap-8 md:flex-row">

                    {/* Profile Avatar */}
                    <div className="flex flex-col items-center md:w-1/4">
                        <Avatar className="size-35 overflow-hidden rounded-full">
                           <img src="src/assets/Avator.png" alt=""  className="h-full w-full object-cover object-top"/>
                            <AvatarFallback>NA</AvatarFallback>
                        </Avatar>

                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                            {profile.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {profile.email}
                        </p>
                    </div>

                    {/* Profile Information */}
                    <div className="flex-1">

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* Full Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name">
                                    Full Name
                                </Label>

                                <Input
                                    id="name"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email">
                                    Email Address
                                </Label>

                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <Label htmlFor="phone">
                                    Phone Number
                                </Label>

                                <Input
                                    id="phone"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Location */}
                            <div className="space-y-2">
                                <Label htmlFor="location">
                                    Location
                                </Label>

                                <Input
                                    id="location"
                                    name="location"
                                    value={profile.location}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    placeholder="Enter your location"
                                />
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex justify-end gap-3">

                            {isEditing && (
                                <Button
                                    variant="outline"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </Button>
                            )}

                            {!isEditing ? (
                                <Button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-gray-900 text-white hover:bg-gray-800"
                                >
                                    Edit Profile
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleSave}
                                    className="bg-gray-900 text-white hover:bg-gray-800"
                                >
                                    Save Changes
                                </Button>
                            )}

                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProfileSection;