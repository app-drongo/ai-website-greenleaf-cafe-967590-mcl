'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Leaf, Clock, Star, Utensils } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  prepTime?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

export default function Restaurantmenu() {
  const menuCategories: MenuCategory[] = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      description: 'Fresh morning delights made with organic ingredients',
      icon: <Utensils className="w-6 h-6" />,
      items: [
        {
          id: 'avocado-toast',
          name: 'Organic Avocado Toast',
          description:
            'Smashed avocado on artisan sourdough with heirloom tomatoes, hemp seeds, and microgreens',
          price: '$14.50',
          isPopular: true,
          isVegan: true,
          prepTime: '8 min',
        },
        {
          id: 'acai-bowl',
          name: 'Superfood Acai Bowl',
          description:
            'Organic acai blended with banana, topped with granola, fresh berries, and coconut flakes',
          price: '$16.00',
          isVegan: true,
          prepTime: '5 min',
        },
        {
          id: 'farm-eggs',
          name: 'Farm Fresh Scrambled Eggs',
          description:
            'Free-range eggs with seasonal vegetables, served with organic sourdough toast',
          price: '$13.00',
          isGlutenFree: true,
          prepTime: '12 min',
        },
        {
          id: 'green-smoothie',
          name: 'Green Goddess Smoothie',
          description: 'Spinach, kale, pineapple, mango, coconut water, and chia seeds',
          price: '$11.50',
          isVegan: true,
          prepTime: '3 min',
        },
      ],
    },
    {
      id: 'lunch',
      name: 'Lunch',
      description: 'Nourishing midday meals crafted with local produce',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        {
          id: 'quinoa-bowl',
          name: 'Rainbow Quinoa Bowl',
          description:
            'Tri-color quinoa with roasted vegetables, chickpeas, tahini dressing, and pumpkin seeds',
          price: '$18.50',
          isPopular: true,
          isVegan: true,
          isGlutenFree: true,
          prepTime: '15 min',
        },
        {
          id: 'grass-fed-burger',
          name: 'Grass-Fed Beef Burger',
          description:
            'Organic beef patty with caramelized onions, arugula, and herb aioli on brioche bun',
          price: '$22.00',
          prepTime: '18 min',
        },
        {
          id: 'harvest-salad',
          name: 'Seasonal Harvest Salad',
          description:
            'Mixed organic greens, roasted beets, goat cheese, candied walnuts, and balsamic vinaigrette',
          price: '$16.50',
          isGlutenFree: true,
          prepTime: '8 min',
        },
        {
          id: 'wild-salmon',
          name: 'Wild-Caught Salmon',
          description: 'Grilled salmon with quinoa pilaf, steamed broccoli, and lemon herb sauce',
          price: '$26.00',
          isGlutenFree: true,
          prepTime: '20 min',
        },
        {
          id: 'mushroom-risotto',
          name: 'Wild Mushroom Risotto',
          description: 'Creamy arborio rice with seasonal mushrooms, truffle oil, and parmesan',
          price: '$20.00',
          isGlutenFree: true,
          prepTime: '25 min',
        },
      ],
    },
    {
      id: 'beverages',
      name: 'Coffee & Beverages',
      description: 'Ethically sourced coffee and refreshing drinks',
      icon: <Clock className="w-6 h-6" />,
      items: [
        {
          id: 'house-blend',
          name: 'GreenLeaf House Blend',
          description: 'Our signature organic coffee blend with notes of chocolate and caramel',
          price: '$4.50',
          isPopular: true,
          prepTime: '3 min',
        },
        {
          id: 'cold-brew',
          name: 'Cold Brew Coffee',
          description: 'Smooth, slow-steeped cold brew served over ice with optional oat milk',
          price: '$5.00',
          isVegan: true,
          prepTime: '2 min',
        },
        {
          id: 'matcha-latte',
          name: 'Ceremonial Matcha Latte',
          description: 'Premium Japanese matcha with steamed organic milk and honey',
          price: '$6.50',
          prepTime: '5 min',
        },
        {
          id: 'kombucha',
          name: 'House-Made Kombucha',
          description: 'Probiotic-rich fermented tea available in ginger-turmeric or berry flavors',
          price: '$7.00',
          isVegan: true,
          prepTime: '1 min',
        },
        {
          id: 'fresh-juice',
          name: 'Fresh Pressed Juice',
          description:
            'Daily selection of cold-pressed juices made from organic fruits and vegetables',
          price: '$8.50',
          isVegan: true,
          prepTime: '3 min',
        },
      ],
    },
  ];

  const getBadgeVariant = (type: 'popular' | 'vegan' | 'gluten-free') => {
    switch (type) {
      case 'popular':
        return 'default';
      case 'vegan':
        return 'secondary';
      case 'gluten-free':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-8 h-8 text-primary" />
            <Badge variant="secondary" className="text-sm font-medium">
              <span data-editable="menuBadge">Farm to Table</span>
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span data-editable="menuTitle">Our Full Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="menuDescription">
              Every dish is crafted with love using the freshest organic ingredients sourced from
              local farms. Taste the difference that quality makes.
            </span>
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">{category.icon}</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    <span data-editable={`category${categoryIndex}Name`}>{category.name}</span>
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  <span data-editable={`category${categoryIndex}Description`}>
                    {category.description}
                  </span>
                </p>
                <Separator className="mt-8 max-w-24 mx-auto" />
              </div>

              {/* Menu Items Grid */}
              <div className="grid gap-6 md:gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={item.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card"
                    style={{ animationDelay: `${categoryIndex * 0.1 + itemIndex * 0.05}s` }}
                  >
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        {/* Item Info */}
                        <div className="flex-1 space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              <span data-editable={`${item.id}Name`}>{item.name}</span>
                            </h3>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                              {item.isPopular && (
                                <Badge variant={getBadgeVariant('popular')} className="text-xs">
                                  <Star className="w-3 h-3 mr-1" />
                                  Popular
                                </Badge>
                              )}
                              {item.isVegan && (
                                <Badge variant={getBadgeVariant('vegan')} className="text-xs">
                                  <Leaf className="w-3 h-3 mr-1" />
                                  Vegan
                                </Badge>
                              )}
                              {item.isGlutenFree && (
                                <Badge variant={getBadgeVariant('gluten-free')} className="text-xs">
                                  GF
                                </Badge>
                              )}
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            <span data-editable={`${item.id}Description`}>{item.description}</span>
                          </p>

                          {item.prepTime && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span data-editable={`${item.id}PrepTime`}>{item.prepTime}</span>
                            </div>
                          )}
                        </div>

                        {/* Price */}
                        <div className="flex-shrink-0">
                          <div className="text-2xl sm:text-3xl font-bold text-primary">
                            <span data-editable={`${item.id}Price`}>{item.price}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                <span data-editable="footerTitle">Dietary Accommodations</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                <span data-editable="footerNote">
                  We're happy to accommodate special dietary needs and allergies. Please inform your
                  server of any restrictions, and our kitchen will work with you to create a
                  delicious meal that meets your requirements.
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
