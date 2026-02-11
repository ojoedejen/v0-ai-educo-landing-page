'use client';

import { BuilderKit } from '@/lib/types/resources';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BuilderKitCardProps {
    kit: BuilderKit;
    onClick: () => void;
}

export function BuilderKitCard({ kit, onClick }: BuilderKitCardProps) {
    return (
        <Card
            className="group cursor-pointer hover-lift transition-all duration-300 border border-gray-200 hover:border-purple-400 hover:shadow-xl bg-white overflow-hidden"
            onClick={onClick}
        >
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {kit.name}
                    </CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed text-gray-600">
                    {kit.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {kit.tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Features Preview */}
                <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        You'll Create:
                    </p>
                    <ul className="space-y-1.5">
                        {kit.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                                <span className="mr-2 text-purple-500">•</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                        {kit.features.length > 3 && (
                            <li className="text-sm text-purple-600 font-medium">
                                +{kit.features.length - 3} more
                            </li>
                        )}
                    </ul>
                </div>

                {/* CTA Button */}
                <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group-hover:shadow-lg"
                    variant="default"
                >
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </CardContent>
        </Card>
    );
}
