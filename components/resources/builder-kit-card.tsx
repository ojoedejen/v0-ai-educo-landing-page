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
            className="group cursor-pointer hover-lift transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20"
            onClick={onClick}
        >
            <CardHeader>
                <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {kit.name}
                    </CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
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
                            className="text-xs px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Features Preview */}
                <div className="space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        You'll Create:
                    </p>
                    <ul className="space-y-1">
                        {kit.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <span className="mr-2">•</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                        {kit.features.length > 3 && (
                            <li className="text-sm text-muted-foreground font-medium">
                                +{kit.features.length - 3} more
                            </li>
                        )}
                    </ul>
                </div>

                {/* CTA Button */}
                <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    variant="outline"
                >
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </CardContent>
        </Card>
    );
}
